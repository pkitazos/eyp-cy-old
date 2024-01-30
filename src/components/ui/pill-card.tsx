// ? Floating Action

export function PillCard({
  title,
  description,
  action,
}: {
  title: string;
  description: string;
  action: () => void;
}) {
  return (
    <div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}
