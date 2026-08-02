export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center p-8">
      <a
        href="https://beian.miit.gov.cn/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm underline underline-offset-4"
      >
        {process.env.NEXT_PRINCEWEN_BEIAN_SERIAL || "京ICP备2023007558号"}
      </a>
    </main>
  );
}
