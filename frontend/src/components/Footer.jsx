import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white pb-5 pt-10 dark:bg-dark">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4">
          {/* Logo & Description */}
          <div className="w-full px-4 sm:w-2/3 lg:w-3/12 mb-10">
            <a href="/" className="mb-6 inline-block max-w-[160px]">
              <img
                src="/logoWithName.png"
                alt="logo"
                className="max-w-full dark:hidden"
              />
            </a>
            <p className="mb-4 text-base text-body-color dark:text-dark-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            </p>
            <p className="text-sm font-medium text-dark dark:text-white">
              +012 (345) 678 99
            </p>
          </div>

          {/* Link Groups */}
          <LinkGroup header="Resources">
            <NavLink link="#" label="SaaS Development" />
            <NavLink link="#" label="Our Products" />
            <NavLink link="#" label="User Strategy" />
          </LinkGroup>

          <LinkGroup header="Company">
            <NavLink link="#" label="About Jobify" />
            <NavLink link="#" label="Contact & Support" />
            <NavLink link="#" label="Success History" />
            <NavLink link="#" label="Privacy Policy" />
          </LinkGroup>

          <LinkGroup header="Quick Links">
            <NavLink link="#" label="Premium Support" />
            <NavLink link="#" label="Our Services" />
            <NavLink link="#" label="Meet Our Team" />
          </LinkGroup>

          {/* Social */}
          <div className="w-full px-4 sm:w-1/2 lg:w-3/12 mb-10">
            <h4 className="mb-4 text-lg font-semibold text-dark dark:text-white">
              Follow Us On
            </h4>
            <div className="flex space-x-3 mb-4">
              <SocialLink label="Facebook" />
              <SocialLink label="Twitter" />
              <SocialLink label="YouTube" />
              <SocialLink label="LinkedIn" />
            </div>
            <p className="text-base text-body-color dark:text-dark-6">
              &copy; 2025 Jobify
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

// Link Group
const LinkGroup = ({ children, header }) => (
  <div className="w-full px-4 sm:w-1/2 lg:w-2/12 mb-10">
    <h4 className="mb-4 text-lg font-semibold text-dark dark:text-white">
      {header}
    </h4>
    <ul className="space-y-2">{children}</ul>
  </div>
);

// Navigation Link
const NavLink = ({ link, label }) => (
  <li>
    <a
      href={link}
      className="text-base text-body-color hover:text-primary dark:text-dark-6"
    >
      {label}
    </a>
  </li>
);

// Social Icon Placeholder
const SocialLink = ({ label }) => (
  <a
    href="#"
    className="flex h-8 w-8 items-center justify-center rounded-full border border-stroke text-dark hover:bg-primary hover:text-white dark:border-dark-3 dark:text-white"
    title={label}
  >
    <span className="text-sm">{label[0]}</span>
  </a>
);
