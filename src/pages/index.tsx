import PageTitle from "ui/components/data-display/PageTitle/PageTitle";
import SafeEnvironment from "ui/components/feedback/SafeEnvironment/SafeEnvironment";
import UserInformation from "ui/components/UserInformation/UserInformation";
import TextFieldMask from 'ui/components/inputs/TexFieldMask/TexFieldMask';
import {Button, Typography} from '@material-ui/core';
import {FormElementsContainer} from 'ui/styles/pages/index.style';

export default function Home() {
  return (
    <div>
      <SafeEnvironment />
      <PageTitle
        title={"Conheça os profissionais"}
        subtitle={"Profissionais da sua localidade"}
      />
      <FormElementsContainer>
            <TextFieldMask
              mask={'99.999-999'}
              label={'Digite seu CEP'}
              fullWidth
              variant={'outlined'}
            />
            <Typography color={'error'}>CEP inválido</Typography>
            <Button
              variant={'contained'}
              color={'secondary'}
              sx={{ width: '220px'}}>
                Buscar
              </Button>
      </FormElementsContainer>
      <UserInformation
        name={"Gustavo"}
        picture={"https://github.com/gugahb.png"}
        description={"São Paulo"}
        rating={4}
      />
    </div>
  );
}
