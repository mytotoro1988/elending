// import { db } from "@/lib/db";
// import getCoursesByCategory from "../actions/getCourses";
// import Categories from "@/components/custom/Caregories";
// import CourseCard from "@/components/courses/CourseCard";

import Slider from "@/components/dasboard/Slider";

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
    <div>
      <Slider />
    </div>
  );
}
