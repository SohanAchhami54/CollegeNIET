import { Hero } from '@/app/components/AcademicSlug/HeroAcademic/Hero';
import PageClient from '@/app/components/AcademicSlug/PageClient/PageClient';
import { getAllPrograms, getProgramBySlug } from '@/data/programs';

import Link from 'next/link';

// Server Component - Handles async params and data fetching
const Page = async ({ params }) => {
  const { slug } = await params;

  // Fetch program data on the server
  const program = slug ? getProgramBySlug(slug) : undefined;
  const allPrograms = getAllPrograms();
  const relatedPrograms = allPrograms.filter((p) => p.id !== program.id)

  // Handle case where program doesn't exist
  if (!program) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Program Not Found
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            The program you&lsquo;re looking for doesn&lsquo;t exist or has been removed.
          </p>
          <Link
            href="/academics"
            className="inline-block px-8 py-3 bg-gradient-to-r from-[#0d4e92] to-cyan-500 text-white font-semibold rounded-lg hover:shadow-lg transition-shadow"
          >
            View All Programs
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Hero Section */}
      <Hero program={program} />

      {/* Client Component for Interactive Content */}
      <PageClient program={program} allPrograms={allPrograms} relatedPrograms={relatedPrograms} />


    </>
  );
};

export default Page;