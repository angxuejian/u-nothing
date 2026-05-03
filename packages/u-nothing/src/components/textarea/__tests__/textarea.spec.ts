import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { mount } from '@vue/test-utils';
import UTextarea from '../src/index.vue';
import { nextTick } from 'vue';

describe('UTextarea', () => {
  // mock RAF
  let resizeCallback: ResizeObserverCallback;

  beforeEach(() => {
    vi.stubGlobal('requestAnimationFrame', (cb: FrameRequestCallback) => {
      return setTimeout(() => cb(0), 0) as unknown as number;
    });

    vi.stubGlobal('cancelAnimationFrame', (id: number) => {
      clearTimeout(id);
    });

    // mock ResizeObserver
    vi.stubGlobal(
      'ResizeObserver',
      vi.fn().mockImplementation((cb: ResizeObserverCallback) => {
        resizeCallback = cb;

        return {
          observe: vi.fn(),
          disconnect: vi.fn(),
        };
      }),
    );

    vi.spyOn(window, 'getComputedStyle').mockReturnValue({
      paddingTop: '10px',
      paddingBottom: '10px',
      borderTopWidth: '1px',
      borderBottomWidth: '1px',
      lineHeight: '20px',
      fontSize: '14px',
    } as any);
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('should render component', () => {
    const wrapper = mount(UTextarea);
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.find('textarea').exists()).toBe(true);
  });

  it('should respect disabled prop', () => {
    const wrapper = mount(UTextarea, {
      props: {
        disabled: true,
      },
    });

    const textarea = wrapper.get('textarea');

    expect(textarea.attributes('disabled')).toBeDefined();
    expect(textarea.classes('is-disabled')).toBe(true);
  });

  it('should bind v-model correctly', async () => {
    const wrapper = mount(UTextarea, {
      props: {
        modelValue: 'hello',
      },
    });

    const textarea = wrapper.get('textarea');

    expect((textarea.element as HTMLTextAreaElement).value).toBe('hello');

    await textarea.setValue('world');

    expect(wrapper.emitted('update:modelValue')).toBeTruthy();
  });

  it('should apply resize style', () => {
    const wrapper = mount(UTextarea, {
      props: {
        resize: 'vertical',
      },
    });

    const textarea = wrapper.get('textarea');

    expect(textarea.attributes('style')).toContain('resize: vertical');
  });

  it('should respect rows and autosize', () => {
    const wrapper = mount(UTextarea, {
      props: {
        rows: 3,
      },
    });

    const textarea = wrapper.get('textarea');

    expect(textarea.attributes('rows')).toBe('3');
  });

  it('should compute autosize minRows correctly', () => {
    const wrapper = mount(UTextarea, {
      props: {
        autosize: {
          minRows: 2,
          maxRows: 5,
        },
      },
    });

    const textarea = wrapper.get('textarea');

    expect(textarea.attributes('rows')).toBe('2');
  });

  it('should emit input event', async () => {
    const wrapper = mount(UTextarea);

    const textarea = wrapper.get('textarea');

    await textarea.trigger('input');

    expect(wrapper.emitted('input')).toHaveLength(1);
    expect(wrapper.emitted('input')![0][0]).toBeTruthy();
  });

  it('should resize on input (raf)', async () => {
    const wrapper = mount(UTextarea);

    const textarea = wrapper.get('textarea');

    Object.defineProperty(textarea.element, 'scrollHeight', {
      value: 100,
      configurable: true,
    });

    await textarea.setValue('some long text');

    await new Promise((r) => setTimeout(r, 0)); // 等 RAF
    await nextTick();

    expect((textarea.element as HTMLTextAreaElement).style.height).toBe('100px');
  });

  it('should trigger resize observer handler', async () => {
    const wrapper = mount(UTextarea);
    const textarea = wrapper.get('textarea');

    Object.defineProperty(textarea.element, 'scrollHeight', {
      value: 120,
      configurable: true,
    });

    // 👇 手动触发 observer
    resizeCallback([], {} as ResizeObserver);

    await new Promise((r) => setTimeout(r, 0)); // 等 RAF
    await nextTick();

    expect((textarea.element as HTMLTextAreaElement).style.height).toBe('120px');
  });

  it('should cleanup on unmount', () => {
    const disconnect = vi.fn();

    vi.stubGlobal(
      'ResizeObserver',
      class {
        constructor() {}
        observe() {}
        disconnect = disconnect;
      },
    );

    const wrapper = mount(UTextarea);

    wrapper.unmount();

    expect(disconnect).toHaveBeenCalled();
  });
});
