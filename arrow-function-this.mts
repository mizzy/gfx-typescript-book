"use strict";

const object = {
  prop: 42,

  method() {
    console.log(this);

    const f = function (this: any) {
      console.log(this);
    };

    f();

    f.bind(this)();

    const a = () => {
      console.log(this);
    };
    a();
  },
};

object.method();
