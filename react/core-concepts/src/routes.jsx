import HomePage from "./pages";
import JsxPage from "./pages/01-jsx";
import ComponentsPropsPage from "./pages/02-components-props";
import StatePage from "./pages/03-state";
import LifecyclePage from "./pages/04-lifecycle";
import HandlingEventsPage from "./pages/05-handling-events";
import ConditionalRenderingPage from "./pages/06-conditional-rendering";
import ListKeysPage from "./pages/07-lists-keys";
import FormsPage from "./pages/08-forms";
import ExercisesPage from "./pages/exercises";
import TodoListPage from "./pages/exercises/todo-list";
import UseEffectPage from "./pages/09-use-effect";

export const ROUTES_LIST = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    title: "JSX",
    path: "/jsx",
    element: <JsxPage />,
  },
  {
    title: "Components and Props",
    path: "/components-props",
    element: <ComponentsPropsPage />,
  },
  {
    title: "State",
    path: "/state",
    element: <StatePage />,
  },
  {
    title: "Lifecycle",
    path: "/lifecycle",
    element: <LifecyclePage />,
  },
  {
    title: "Handling Events",
    path: "/handling-events",
    element: <HandlingEventsPage />,
  },
  {
    title: "Conditional Rendering",
    path: "/conditional-rendering",
    element: <ConditionalRenderingPage />,
  },
  {
    title: "Lists and Keys",
    path: "/lists-keys",
    element: <ListKeysPage />,
  },
  {
    title: "Forms",
    path: "/forms",
    element: <FormsPage />,
  },
  {
    title: "Use Effect",
    path: "/use-effect",
    element: <UseEffectPage />,
  },
  {
    title: "Exercises",
    path: "/exercises",
    element: <ExercisesPage />,
  },
  {
    title: "Exercises - todo list",
    path: "/exercises/todo-list",
    element: <TodoListPage />,
  },
];
