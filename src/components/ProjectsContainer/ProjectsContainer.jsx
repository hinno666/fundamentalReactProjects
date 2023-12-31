import { Accordion } from "../Accordion/Accordion";
import { Menu } from "../Menu/Menu";
import Reviews from "../Reviews/Reviews";
import { Tabs } from "../Tabs/Tabs";

import './ProjectsContainer.css'

export const ProjectsContainer = () => {
  return (
    <main className="main container">
      <h1 className="title">my projects</h1>
      <Reviews />
      <Accordion />
      <Menu />
      <Tabs />
    </main>
  );
}
