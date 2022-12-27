import { GoTop } from '.';

export default {
  title: 'GoTop',
  component: GoTop,
  args: {
    children: 'GoTop',
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div style={{ height: '400vh' }}>
      <h1>Topo</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis,
        enim explicabo delectus excepturi, ex placeat laudantium voluptates
        aspernatur quo non, veritatis reprehenderit ipsa facilis sapiente maxime
        amet modi ducimus voluptatum!
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis,
        enim explicabo delectus excepturi, ex placeat laudantium voluptates
        aspernatur quo non, veritatis reprehenderit ipsa facilis sapiente maxime
        amet modi ducimus voluptatum!
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis,
        enim explicabo delectus excepturi, ex placeat laudantium voluptates
        aspernatur quo non, veritatis reprehenderit ipsa facilis sapiente maxime
        amet modi ducimus voluptatum!
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis,
        enim explicabo delectus excepturi, ex placeat laudantium voluptates
        aspernatur quo non, veritatis reprehenderit ipsa facilis sapiente maxime
        amet modi ducimus voluptatum!
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis,
        enim explicabo delectus excepturi, ex placeat laudantium voluptates
        aspernatur quo non, veritatis reprehenderit ipsa facilis sapiente maxime
        amet modi ducimus voluptatum!
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis,
        enim explicabo delectus excepturi, ex placeat laudantium voluptates
        aspernatur quo non, veritatis reprehenderit ipsa facilis sapiente maxime
        amet modi ducimus voluptatum!
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis,
        enim explicabo delectus excepturi, ex placeat laudantium voluptates
        aspernatur quo non, veritatis reprehenderit ipsa facilis sapiente maxime
        amet modi ducimus voluptatum!
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis,
        enim explicabo delectus excepturi, ex placeat laudantium voluptates
        aspernatur quo non, veritatis reprehenderit ipsa facilis sapiente maxime
        amet modi ducimus voluptatum!
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis,
        enim explicabo delectus excepturi, ex placeat laudantium voluptates
        aspernatur quo non, veritatis reprehenderit ipsa facilis sapiente maxime
        amet modi ducimus voluptatum!
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis,
        enim explicabo delectus excepturi, ex placeat laudantium voluptates
        aspernatur quo non, veritatis reprehenderit ipsa facilis sapiente maxime
        amet modi ducimus voluptatum!
      </p>
      <GoTop {...args} />
    </div>
  );
};
