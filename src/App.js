import { BrowserRouter as Router, NavLink } from "react-router-dom";
import Menu from "./components/Menu";
import Activity from "./components/Activity";
import Table from "./components/Table";
function App() {
  const routes = [
    {
      id: 1,
      name: "Dashboard",
      path: "/",
      icon: "/message.svg",
    },
    {
      id: 2,
      name: "Shifts",
      path: "/shifts",
      icon: "/message.svg",
    },
    {
      id: 3,
      name: "Tasks",
      path: "/tasks",
      icon: "/message.svg",
    },
    {
      id: 4,
      name: "Messages",
      path: "/messages",
      icon: "/message.svg",
    },
    {
      id: 5,
      name: "Newsfeed",
      path: "/newsfeed",
      icon: "/message.svg",
    },
  ];
  return (
    <Router>
      <div className="">
        <header className="flex items-center justify-between bg-[#0085FF] h-[60px] pr-2">
          <div className="w-24 flex items-center">
            <img src="./logo.png" alt="logo" className="w-[60px]" />
            <span className="text-white text-lg ml-2 uppercase font-medium">
              Sling
            </span>
          </div>
          <nav>
            <div className="flex">
              {routes.map((route, index) => (
                <li
                  className="ml-12 list-none flex h-[60px] text-sm text-white font-semibold tracking-wider uppercase transition duration-500	ease-in-out"
                  key={route.id}
                >
                  <NavLink
                    to={route.path}
                    className="opacity-60 flex items-center"
                  >
                    <img
                      src={route.icon}
                      alt="icon"
                      className="w-[16px] mr-2"
                    />
                    {route.name}
                  </NavLink>
                </li>
              ))}
            </div>
          </nav>

          <Menu />
        </header>
        <Activity />
        <Table />
      </div>
    </Router>
  );
}

export default App;
