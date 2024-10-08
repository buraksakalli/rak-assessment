import { Poll } from "./_containers";

import { savePoll } from "./_actions";

export default async function Page() {
  return (
    <main>
      <Poll
        savePoll={async (e) => {
          "use server";
          savePoll(e);
        }}
      />
    </main>
  );
}
