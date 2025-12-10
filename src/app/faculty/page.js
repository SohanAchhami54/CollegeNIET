import { Suspense } from "react";
import FacultyPageContent from "./FacultyPageContent";

export default function FacultyPage() {
  return (
    <Suspense fallback={<div className="p-10 text-center">Loading...</div>}>
      <FacultyPageContent />
    </Suspense>
  );
}
