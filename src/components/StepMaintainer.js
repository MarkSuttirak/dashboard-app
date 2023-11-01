import { useState } from 'react';

export default function StepMaintainer({ children, ...props }){
  const [current, setCurrent] = useState(0);

  const Component = (props) => {
    if (Array.isArray(children)) {
      const comp = {
        ...children[current],
        props: {
          ...children[current].props,
          ...props,
        }
      }
      return comp;
    } else {
      return {
        ...children,
        props: {
          ...children.props,
          ...props,
        }
      }
    }
  };
  const next = () => {
    if (current < children.length) {
      setCurrent(current + 1);
    }
  };

  const prev = () => {
    if (current > 0) {
      setCurrent(current - 1);
    }
  };

  return <Component next={next} prev={prev} current={current} {...props} />;
};