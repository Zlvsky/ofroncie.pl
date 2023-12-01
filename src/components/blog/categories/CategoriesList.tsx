import { categoriesArr } from "@/data/categories";
import { Category } from "@/types/Posts";
import Link from "next/link";


function CategoriesList() {
    const SingleCategory = ({ title, path }: Category) => {
        return (
          <Link href={path} className="bg-secondary text-white py-2 px-5 rounded-lg">
            {title}
          </Link>
        );
    }

    return (
      <div className="flex flex-row gap-5 mt-20 mb-28">
        {categoriesArr.map((category) => (
          <SingleCategory title={category.title} path={category.path} key={category.path} />
        ))}
      </div>
    );
}

export default CategoriesList;