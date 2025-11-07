### Resources and how to
The left side before `:` is the config name, you don't need either modify and change them. it should be something like `"$cuigv:PrimanyColor"`. We'll call it **Config** for easier understanding.
<br><br>
The right side after `:` is a Value type cosponse to Value, Boolean, Color, ColorAdv and so on. This is where you'll be modify with. We'll call it **Value**. There's also `,` after the **Value**, ***Do not delete it whatsoever or the game may not launch.***
<br><br>
Each **Config**(s) has a different Value types, such as `Boolean`, `Color`, `ColorAdv`, `Value` and `Easing`. You will see each of Value types on the description of the said **Config**.
<br><br>
#### Boolean
- `Boolean` is like a toggle, instead of enable, You write `true`. if disable, you write `false`.
#### Color + ColorAdv
- `Color` might be complicated, but it is a RGB value divdied by 1. Use a color picker and select which color you'd like, get a RGB value that should look like `158, 50, 168` (Purple). Divide it by 1 on each of the value and you should turn it into `0.619, 0.196, 0.658`. Now put a brackets to it `[]`, it should now look like `[ 0.619, 0.196, 0.658 ]` and that's it!
- `ColorAdv` is the same as `Color/RGB`, but with **Opacity** at the end. it should be something like `[ 0.619, 0.196, 0.658, 1.0 ]`. - Opacity is ranged from 0 to 1.
#### Value
- `Value` is a number that ranged from 0 to 1. think of it like percentage between 0% to 100%.
#### Easing
- `Easing` is a string cosponse to animation's easing type. it changes how it moves from start to finish. There's alot of Easing type, The list goes here! `linear`, `spring`, `in_quad`, `out_quad`, `in_out_quad`, `in_cubic`, `out_cubic`, `in_out_cubic`, `in_quart`, `out_quart`, `in_out_quart`, `in_quint`, `out_quint`, `in_out_quint`, `in_sine`, `out_sine`, `in_out_sine`, `in_expo`, `out_expo`, `in_out_expo`, `in_circ`, `out_circ`, `in_out_circ`, `in_bounce`, `out_bounce`, `in_out_bounce`, `in_back`, `out_back`, `in_out_back`, `in_elastic`, `out_elastic`, `in_out_elastic`.