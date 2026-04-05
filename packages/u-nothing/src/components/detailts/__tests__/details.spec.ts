import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import UDetails from '../src/index.vue';

describe('UDetails', () => {
  it('should render component', () => {
    const wrapper = mount(UDetails);
    expect(wrapper.exists()).toBe(true);
  });

  it('should respect open prop', () => {
    const wrapperDefaultTheme = mount(UDetails, {
      props: {
        open: true,
        default: true,
      },
      slots: {
        default: 'content',
      },
    });

    const wrapperUTheme = mount(UDetails, {
      props: {
        open: true,
        default: false,
      },
      slots: {
        default: 'content',
      },
    });
    expect(wrapperDefaultTheme.attributes('open')).toBeDefined();
    expect(wrapperDefaultTheme.text()).toContain('content');

    expect(wrapperUTheme.classes('is-open')).toBe(true);
    expect(wrapperUTheme.text()).toContain('content');
  });

  it('should render default slot when open', () => {
    const wrapper = mount(UDetails, {
      props: { open: true },
      slots: {
        default: '<div class="content">Hello</div>',
      },
    });

    expect(wrapper.find('.content').exists()).toBe(true);
  });

  it('should render summary slot', () => {
    const wrapper = mount(UDetails, {
      slots: {
        summary: '<span class="summary">Title</span>',
      },
    });

    expect(wrapper.find('.summary').exists()).toBe(true);
  });

  it('should not render summary if no slot provided', () => {
    const wrapper = mount(UDetails);

    expect(wrapper.find('summary').exists()).toBe(false);
  });

  it('should toggle open state on click', async () => {
    const wrapper = mount(UDetails, {
      props: { open: false },
      slots: {
        summary: 'title',
        default: 'content',
      },
    });

    const summary = wrapper.get('[data-test="summary"]');

    await summary.trigger('click');

    // DOM 更新
    expect(wrapper.classes('is-open')).toBe(true);
    expect(wrapper.text()).toContain('content');
  });

  it('should emit change event', async () => {
    const wrapper = mount(UDetails, {
      slots: {
        summary: 'title',
      },
    });

    const summary = wrapper.get('[data-test="summary"]');

    await summary.trigger('click');

    expect(wrapper.emitted('change')).toBeTruthy();
    expect(wrapper.emitted('change')![0]).toEqual([true]);
  });

  it('should toggle multiple times', async () => {
    const wrapper = mount(UDetails, {
      slots: {
        summary: 'title',
      },
    });

    const summary = wrapper.get('[data-test="summary"]');

    await summary.trigger('click');
    await summary.trigger('click');

    const events = wrapper.emitted('change')!;
    expect(events.length).toBe(2);
    expect(events[0]).toEqual([true]);
    expect(events[1]).toEqual([false]);
  });
});
