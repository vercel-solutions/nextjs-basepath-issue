export default function Workspace({
  params: { workspace },
}: {
  params: {
    workspace: string;
  };
}) {
  return <div>Workspace: {workspace}</div>;
}
