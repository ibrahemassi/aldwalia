import generateStylesheetObject from "@/common/generateStylesheetsObject";
import Lines from "@/components/common/Lines";
import ProgressScroll from "@/components/common/ProgressScroll";
import Cursor from "@/components/common/cusor";
import LoadingScreen from "@/components/common/loader";
import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import ThemeScripts from '@/components/common/ThemeScripts';

import ProjectHeader from "@/components/portfolio/ProjectHeader";
import ProjectChallenge from "@/components/portfolio/ProjectChallenge";
import ProjectWorks from "@/components/portfolio/ProjectWorks";
import ProjectSolution from "@/components/portfolio/ProjectSolution";
import ProjectGallery from "@/components/portfolio/ProjectGallery";
import ProjectNext from "@/components/portfolio/ProjectNext";
import { notFound } from "next/navigation";
import portfoliosData from "@/data/portfolios";

// Generate static params for all portfolio projects
export async function generateStaticParams() {
  return portfoliosData.map((project) => ({
    slug: project.slug,
  }));
}

// Generate metadata for each project
export async function generateMetadata({ params }) {
  const project = portfoliosData.find((p) => p.slug === params.slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} - Webfolio`,
    description: project.description,
    icons: {
      icon: "/assets/imgs/favicon.ico",
      shortcut: "/assets/imgs/favicon.ico",
      other: generateStylesheetObject([
        "/assets/css/plugins.css",
        "/assets/css/style.css",
        "https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900&display=swap",
        "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@200;300;400;500;600;700&display=swap",
      ]),
    },
  };
}

export default function PortfolioPage({ params }) {
  const project = portfoliosData.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  // Get related projects
  const relatedProjects = portfoliosData.filter((p) =>
    project.relatedProjects.includes(p.id),
  );

  return (
    <body>
      <LoadingScreen />
      <Cursor />
      <ProgressScroll />
      <Lines />
      <Navbar />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main className="main-bg o-hidden">
            <ProjectHeader project={project} />
            <ProjectChallenge project={project} />
            <ProjectWorks project={project} />
            <ProjectSolution project={project} />
            <ProjectGallery project={project} />
            <ProjectNext project={project} relatedProjects={relatedProjects} />
          </main>
          <Footer />
        </div>
      </div>
          <ThemeScripts />
    </body>
  );
}
