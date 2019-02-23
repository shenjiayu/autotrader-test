import Vue from 'vue';
import { mount } from '@vue/test-utils';
import SubHeader from '@/components/SubHeader.vue';

function getRenderedText (Component, propsData) {
  const Constructor = Vue.extend(Component)
  const vm = new Constructor({ propsData: propsData }).$mount()
  return vm.$el.textContent
}

describe('SubHeader.vue', () => {
  it('should have two props', () => {
    const wrapper = mount(SubHeader);
    expect(Object.keys(wrapper.props()).length).toBe(3);
  });

  it('renders props when passed', () => {
    const title = 'new title';
    expect(getRenderedText(SubHeader, {
      title: title
    })).toMatch(title);

    const description = 'new description';
    expect(getRenderedText(SubHeader, {
      description: description
    })).toMatch(description);
  })
})
