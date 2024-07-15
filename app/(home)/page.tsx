// import { db } from "@/lib/db";
// import getCoursesByCategory from "../actions/getCourses";
// import Categories from "@/components/custom/Caregories";
// import CourseCard from "@/components/courses/CourseCard";

export default async function Home() {
  //   const categories = await db.category.findMany({
  //     orderBy: {
  //       name: "asc",
  //     },
  //     include: {
  //       subCategories: { orderBy: { name: "asc" } },
  //     },
  //   });
  //   const courses = await getCoursesByCategory(null);
  return (
    <div className="flex items-center justify-between p-4 bg-gradient-to-t from-[#0A4297] to-[#016BB8] ">
      <div className="flex items-center justify-between md:container md:mx-auto h-40">
        home
      </div>
    </div>
  );
}
