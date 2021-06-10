import PageTitle from "ui/components/data-display/PageTitle/PageTitle";
import SafeEnvironment from "ui/components/feedback/SafeEnvironment/SafeEnvironment";
import UserInformation from "ui/components/UserInformation/UserInformation";

export default function Home() {
  return (
    <div>
      <SafeEnvironment />
      <PageTitle
        title={"Conheça os profissionais"}
        subtitle={"Profissionais da sua localidade"}
      />
      <UserInformation
        name={"Gustavo"}
        picture={"https://github.com/gugahb.png"}
        description={"São Paulo"}
        rating={4}
      />
    </div>
  );
}
