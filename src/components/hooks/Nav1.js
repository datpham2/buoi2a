import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from 'reactstrap';

function Nav1(args) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const items = [
    {
      src: 'https://picsum.photos/id/123/1200/400',
      altText: 'Slide 1',
      caption: 'Slide 1',
      key: 1,
    },
    {
      src: 'https://picsum.photos/id/456/1200/400',
      altText: 'Slide 2',
      caption: 'Slide 2',
      key: 2,
    },
    {
      src: 'https://picsum.photos/id/678/1200/400',
      altText: 'Slide 3',
      caption: 'Slide 3',
      key: 3,
    },
  ];

  const listCateTour = [
    { id: 1, title: "New York" },
    { id: 2, title: "London" },
    { id: 3, title: "Tokyo" },
    { id: 4, title: "Los Angeles" },
];

const listTour = [
    {
        id: 1,
        title: "Three Temples Bangkok City Tour Must Visit",
        category: "New York",
        price: 149.99,
        img: "https://react-bootstrap-lovat.vercel.app/img/tour-1.png",
    },
    {
        id: 2,
        title: "Essence of Vietnam South to North",
        category: "New York",
        price: 167.19,
        img: "https://react-bootstrap-lovat.vercel.app/img/tour-2.png",
    },
    {
        id: 3,
        title: "Osa Peninsula to Dominical City Tour",
        category: "New York",
        price: 134.99,
        img: "https://react-bootstrap-lovat.vercel.app/img/tour-3.png",
special:true
    },
    {
        id: 4,
        title: "Mt Fuji, Hakone, Lake Ashi Cruise",
        category: "New York",
        price: 50.15,
        img: "https://react-bootstrap-lovat.vercel.app/img/tour-4.png",
    },
    {
        id: 5,
        title: "Three Temples Bangkok City Tour Must Visit",
        category: "London",
        price: 149.99,
        img: "https://react-bootstrap-lovat.vercel.app/img/tour-5.png",
    },
    {
        id: 6,
        title: "Essence of Vietnam South to North",
        category: "London",
        price: 167.19,
        img: "https://react-bootstrap-lovat.vercel.app/img/tour-6.png",
special:true
    },
    {
        id: 7,
        title: "Osa Peninsula to Dominical City Tour",
        category: "London",
        price: 134.99,
        img: "https://react-bootstrap-lovat.vercel.app/img/tour-7.png",
    },
    {
        id: 8,
        title: "Mt Fuji, Hakone, Lake Ashi Cruise",
        category: "London",
        price: 50.15,
        img: "https://react-bootstrap-lovat.vercel.app/img/tour-8.png",
    },
    {
        id: 9,
        title: "Three Temples Bangkok City Tour Must Visit",
        category: "Tokyo",
        price: 149.99,
        img: "https://react-bootstrap-lovat.vercel.app/img/tour-9.png",
special:true
    },
    {
        id: 10,
        title: "Essence of Vietnam South to North",
        category: "Tokyo",
        price: 117.19,
        img: "https://react-bootstrap-lovat.vercel.app/img/tour-10.png",
    },
    {
        id: 11,
        title: "Osa Peninsula to Dominical City Tour",
        category: "Tokyo",
        price: 134.99,
        img: "https://react-bootstrap-lovat.vercel.app/img/tour-11.png",
    },
    {
        id: 12,
        title: "Mt Fuji, Hakone, Lake Ashi Cruise",
        category: "Tokyo",
        price: 50.15,
        img: "https://react-bootstrap-lovat.vercel.app/img/tour-12.png",
special:true
    },
    {
        id: 13,
        title: "Three Temples Bangkok City Tour Must Visit",
        category: "Los Angeles",
        price: 149.99,
        img: "https://react-bootstrap-lovat.vercel.app/img/tour-13.png",
    },
    {
        id: 14,
        title: "Essence of Vietnam South to North",
        category: "Los Angeles",
        price: 117.19,
        img: "https://react-bootstrap-lovat.vercel.app/img/tour-14.png",
    },
    {
        id: 15,
        title: "Osa Peninsula to Dominical City Tour",
        category: "Los Angeles",
        price: 134.99,
        img: "https://react-bootstrap-lovat.vercel.app/img/tour-15.png",
    },
    {
        id: 16,
        title: "Mt Fuji, Hakone, Lake Ashi Cruise",
        category: "Los Angeles",
        price: 50.15,
        img: "https://react-bootstrap-lovat.vercel.app/img/tour-16.png",
    },
];

const listBlog = [
    {
        id: 1,
        title: "Europe’s finest and most scenic train journeys",
        category: "Health & Fitness",
        img: "https://react-bootstrap-lovat.vercel.app/img/blog-1.png",
    },
    {
        id: 2,
        title: "The 5 best hikes around the world",
        category: "Creative",
        img: "https://react-bootstrap-lovat.vercel.app/img/blog-2.png",
    },
    {
        id: 3,
        title: "Pack wisely before traveling",
        category: "Family Travel",
        img: "https://react-bootstrap-lovat.vercel.app/img/blog-3.png",
    },
    {
        id: 4,
        title: "The Surfing Man Will Blow Your Mind",
        category: "Future of Travel",
        img: "https://react-bootstrap-lovat.vercel.app/img/blog-4.png",
    },
    {
        id: 5,
        title: "An arts and culture guide to Turin, Italy",
        category: "Family Travel",
        img: "https://react-bootstrap-lovat.vercel.app/img/blog-5.png",
    },
    {
        id: 6,
        title: "Pityful a rethoric question ran",
        category: "Future of Travel",
        img: "https://react-bootstrap-lovat.vercel.app/img/blog-6.png",
    },
];

  return (
    <div>
      <Navbar expand="md">
        <NavbarBrand href="/">reactstrap</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink href="/components/">Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">
                GitHub
              </NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>Option 1</DropdownItem>
                <DropdownItem>Option 2</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Reset</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavbarText>Simple Text</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Nav1;