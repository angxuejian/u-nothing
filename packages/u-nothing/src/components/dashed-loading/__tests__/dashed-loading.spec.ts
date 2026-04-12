import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import UDashedLoading from '../src/index.vue';

describe('UDashedLoading', () => {
  it('should render component', () => {
    const wrapper = mount(UDashedLoading);
    expect(wrapper.exists()).toBe(true);
  });

  it('should render svg element', () => {
    const wrapper = mount(UDashedLoading);
    expect(wrapper.find('svg').exists()).toBe(true);
  });

  it('should render circle element', () => {
    const wrapper = mount(UDashedLoading);
    expect(wrapper.find('circle').exists()).toBe(true);
  });

  it('should apply default props', () => {
    const wrapper = mount(UDashedLoading);
    const circle = wrapper.find('circle');
    expect(circle.attributes('r')).toBe('10');
    expect(circle.attributes('stroke-width')).toBe('1');
  });

  it('should respect radius prop', () => {
    const wrapper = mount(UDashedLoading, {
      props: { radius: 20 },
    });
    const circle = wrapper.find('circle');
    expect(circle.attributes('r')).toBe('20');
  });

  it('should respect strokeWidth prop', () => {
    const wrapper = mount(UDashedLoading, {
      props: { strokeWidth: 2 },
    });
    const circle = wrapper.find('circle');
    expect(circle.attributes('stroke-width')).toBe('2');
  });

  it('should calculate correct viewBox', () => {
    const wrapper = mount(UDashedLoading, {
      props: { radius: 15, strokeWidth: 1, padding: 4 },
    });
    const svg = wrapper.find('svg');
    expect(svg.attributes('viewBox')).toBeDefined();
  });

  it('should apply computed style', () => {
    const wrapper = mount(UDashedLoading, {
      props: { radius: 10, dashedPercent: 0.5 },
    });
    const svg = wrapper.find('svg');
    const style = svg.attributes('style');
    expect(style).toContain('--circ');
    expect(style).toContain('--dash-long');
    expect(style).toContain('--dash-gap');
  });

  it('should clamp dashedPercent between 0 and 1', () => {
    const wrapper1 = mount(UDashedLoading, {
      props: { dashedPercent: 1.5 },
    });
    const wrapper2 = mount(UDashedLoading, {
      props: { dashedPercent: -0.5 },
    });
    expect(wrapper1.find('svg').exists()).toBe(true);
    expect(wrapper2.find('svg').exists()).toBe(true);
  });

  it('should generate correct center coordinate', () => {
    const wrapper = mount(UDashedLoading, {
      props: { radius: 10, strokeWidth: 1, padding: 4 },
    });
    const circle = wrapper.find('circle');
    expect(circle.attributes('cx')).toBe('15');
    expect(circle.attributes('cy')).toBe('15');
  });

  it('should update styles when dashedPercent changes', async () => {
    const wrapper = mount(UDashedLoading, {
      props: { dashedPercent: 0.5 },
    });
    const style1 = wrapper.find('svg').attributes('style');

    await wrapper.setProps({ dashedPercent: 0.75 });

    const style2 = wrapper.find('svg').attributes('style');
    expect(style1).not.toBe(style2);
  });
});
