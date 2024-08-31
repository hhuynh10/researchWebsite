import { notFound } from 'next/navigation';
import { projects } from '@/data';
import Wrapper from '@/components/ui/Wrapper';

type ProjectPageProps = {
  params: {
    id: string;
  };
};

export default function ProjectPage({ params }: ProjectPageProps) {
  const projectId = parseInt(params.id);
  const project = projects.find((project) => project.id === projectId);

  if (!project) {
    notFound();
  }

  return (
    <Wrapper>
      <div className="py-20 mt-16">
        <h1 className="heading">{project.title}</h1>
        <div className="flex flex-col items-center justify-center p-4">
          <img src={project.poster} alt={project.title} className="w-94 h-auto mb-8" />
          <p
            className="lg:text-xl font-light text-sm text-left"
          >
            ABSTRACT: {project.abstract}
          </p>
        </div>
      </div>
    </Wrapper>
  );
}
