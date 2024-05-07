import { useNavigate } from "@solidjs/router";
import { JSXElement, createSignal, type Component } from "solid-js";

const App: Component<{ children?: JSXElement }> = (props) => {
    const [count, setCount] = createSignal(0);
    const increment = () => {
        setCount(count() + 1);
    };
    const decrease = () => {
        setCount(count() - 1);
    };
    const navigator = useNavigate();
    return (
        <div class="flex-col p-10">
            <div>
                <h1>signal test</h1>
                <div>count:{count()}</div>
                <button class="btn" onClick={increment}>
                    +
                </button>
                <button class="btn ml-1" onClick={decrease}>
                    -
                </button>
            </div>
            <div class="mt-5">
                <h1>route test</h1>
                <div class="flex gap-2 mt-2">
                    <button class="btn" onClick={() => navigator("/kancy")}>
                        ToKancy
                    </button>
                    <button class="btn" onClick={() => navigator("/tyee")}>
                        ToTyee
                    </button>
                    <button
                        class="btn btn-warning"
                        onClick={() => navigator("/")}
                    >
                        Reset
                    </button>
                </div>
            </div>
            <div class="mt-5">{props.children}</div>
        </div>
    );
};

export default App;
