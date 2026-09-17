import Link from "next/link";

export default function StudentInfo() {
  return (
    <div>
      <p>Your Name</p>
      <Link href="https://github.com/your-username/cprg306-assignments">
        GitHub Repository
      </Link>
    </div>
  );
}
