import Link from 'next/link';

export default function Header({ name }) {
  return (
    <header className="pt-20 pb-12">
      <div className="block w-12 h-12 mx-auto mb-4 rounded-full bg-conic-180 from-gradient-3 from-0% to-gradient-4 to-100%" />
      <p className="text-2xl text-center dark:text-white">
        <Link href="/">{name}</Link>
      </p>
    </header>
  <script type="module"
      src="https://agent.d-id.com/v2/index.js"
      data-mode="fabio"
      data-client-key="Z29vZ2xlLW9hdXRoMnwxMTM2MzE3ODYyMzAxMjkwNDc3NTk6SWFFOVpiNmw2Yk5pOWRLaW5JTmdQ"
      data-agent-id="v2_agt_br-R4l6H"
      data-name="did-agent"
      data-monitor="true"
      data-orientation="horizontal"
      data-position="right">
</script>
  );
}
