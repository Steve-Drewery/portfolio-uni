import styles from "./style.module.scss";
import { useState, useEffect, useRef } from "react";
import Project from "./Project/Project";
import { motion } from "framer-motion";
import gsap from "gsap";

const projects = [
  {
    title: "Portfolio",
    src: "/Images/background.webp",
    color: "#000000",
    icon: {
      html: "/Images/html.svg",
      css: "/Images/css.svg",
      react: "/Images/react.svg",
      tailwind: "/Images/tailwind.svg",
      sass: "/Images/sass.svg",
    },
    href: "https://fullstack-development.netlify.app/",
  },
  {
    title: "Workout App",
    src: "/Images/workout-app.webp",
    color: "#8C8C8C",
    icon: {
      html: "/Images/html.svg",
      css: "/Images/css.svg",
      react: "/Images/react.svg",
      tailwind: "/Images/tailwind.svg",
    },
    href: "https://my-workout-app.netlify.app/",
  },
  {
    title: "Group Work",
    src: "/Images/group.webp",
    color: "#EFE8D3",
    icon: {
      html: "/Images/html.svg",
      css: "/Images/css.svg",
      react: "/Images/react.svg",
      sass: "/Images/sass.svg",
    },
    href: "https://fitalytics.netlify.app/",
  },
];

const scaleAnimation = {
  initial: { scale: 0, x: "-50%", y: "-50%" },
  enter: {
    scale: 1,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    scale: 0,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] },
  },
};

export default function Home() {
  const [modal, setModal] = useState({ active: false, index: 0 });
  const { active, index } = modal;
  const modalContainer = useRef(null);

  let xMoveContainer = useRef(null);
  let yMoveContainer = useRef(null);

  useEffect(() => {
    //Move Container
    xMoveContainer.current = gsap.quickTo(modalContainer.current, "left", {
      duration: 0.8,
      ease: "power3",
    });
    yMoveContainer.current = gsap.quickTo(modalContainer.current, "top", {
      duration: 0.8,
      ease: "power3",
    });
  }, []);

  const moveItems = (x, y) => {
    xMoveContainer.current(x);
    yMoveContainer.current(y);
  };
  const manageModal = (active, index, x, y) => {
    moveItems(x, y);
    setModal({ active, index });
  };

  return (
    <main
      id="projects"
      onMouseMove={(e) => {
        moveItems(e.clientX, e.clientY);
      }}
      className={styles.projects}
    >
      <h3 className={styles.skills}>Projects and Skills</h3>
      <div className={styles.body}>
        {projects.map((project, index) => {
          return (
            <Project
              index={index}
              title={project.title}
              manageModal={manageModal}
              key={index}
              icon={project.icon}
              href={project.href}
            />
          );
        })}
      </div>
      <>
        <motion.div
          ref={modalContainer}
          variants={scaleAnimation}
          initial="initial"
          animate={active ? "enter" : "closed"}
          className={styles.modalContainer}
        >
          <div
            style={{ top: index * -100 + "%" }}
            className={styles.modalSlider}
          >
            {projects.map((project, index) => {
              const { src, color } = project;
              return (
                <div
                  className={styles.modal}
                  style={{ backgroundColor: color }}
                  key={`modal_${index}`}
                >
                  <img src={src} width={400} height={0} alt="" />
                </div>
              );
            })}
          </div>
        </motion.div>
        <div className={styles.about} id="education">
          <h3>Education</h3>
          <div className={styles.grid}>
            <div className={styles.card}>
              <div className={styles.writing}>
                I previously completed a Diploma of IT through Coder Academy
                where we primarily focused on Web Development both front and
                backend. I enjoyed backend development the most as I found I
                really enjoyed working with Ruby on Rails. This was my first
                experience with anything code related which it actually made
                sense. Our final assessment was a group activity where we were
                given the task to develop a website where one would work on the
                frontend and the other on the backend. I worked on the backend
                for this activity where we developed a basic website with user
                functionality, personal data storage and the ability to compare
                with other user records. The final website can be found above in
                the group work link.
              </div>
              <div className={styles.writing}>
                I'm currently studying a Bachelor of IT majoring in Software
                Development at Griffith University, due to graduate at the
                beginning of 2025.
                <div className={styles.subhead}>University Projects</div>
                <li>
                  Web development tourism website with pure CSS, HTML and
                  JavaScript
                </li>
                <li>App development workout app with Angular and Ionic</li>
              </div>
              <div className={styles.caption}>Study</div>
            </div>
            <div className={styles.card}>
              I have found myself really enjoyingSoftware and Web/App
              development therefore I hope to begin my career in one of those
              fields. Recently seeing the development of augmented reality has
              caught my attention and thinking of the potential for its use in
              learning, I would like to return to study to focus on augmented
              reality development in the future.
              <div className={styles.caption}>Future Goals</div>
            </div>
            <div className={styles.card}>
              In my personal time you can find me out riding motorbikes, at the
              gym, hanging out with friends or at home playing games or binging
              the latest series on netflix. My latest gaming addiction is
              playing Facorio, a game about optimisation, designed by
              programmers and I can't get enough of it.
              <div className={styles.caption}>Hobbies</div>
            </div>
          </div>
        </div>
      </>
    </main>
  );
}
