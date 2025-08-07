import { Main, Box, Typography, Accordion, LinkButton } from '@strapi/design-system';
import { useIntl } from 'react-intl';

import { getTranslation } from '../utils/getTranslation';

const HomePage = () => {
  const { formatMessage } = useIntl();

  return (
    <Main padding={5}>
      <Box paddingBottom={4} margin={20}>
        <Typography variant="alpha">Welcome to Jagraj's Plugin</Typography>
        <Box>
          <Typography variant="epsilon">Get count of Article entiries i.e. both Drafted and Published.</Typography>
        </Box>
      </Box>
      <Box paddingBottom={4} margin={20}>
        <Accordion.Root>
          <Accordion.Item value="acc-01">
            <Accordion.Header>
              <Accordion.Trigger>Check Drafted + Published Count</Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content>
              <Typography display="block" padding={4}>
                This provides total count of article entries including Drafted and Published.
              </Typography>
              <LinkButton
                href="/jagraj-todo/articles/all/count"
                isExternal
                size="M"
                variant="default"
              >
                Show count
              </LinkButton>
            </Accordion.Content>
          </Accordion.Item>
          <Accordion.Item value="acc-02">
            <Accordion.Header>
              <Accordion.Trigger>Check Drafted Count</Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content>
              <Typography display="block" padding={4}>
                This provides total count of article entries which are Drfated.
              </Typography>
              <LinkButton
                href="/jagraj-todo/articles/drafted/count"
                isExternal
                size="M"
                variant="default"
              >
                Show count
              </LinkButton>
            </Accordion.Content>
          </Accordion.Item>
          <Accordion.Item value="acc-03">
            <Accordion.Header>
              <Accordion.Trigger>Check Published Count</Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content>
              <Typography display="block" padding={4}>
                This provides total count of article entries which are Published.
              </Typography>
              <LinkButton
                href="/api/jagraj-todo/articles/published/count"
                isExternal
                size="M"
                variant="default"
              >
                Show count
              </LinkButton>
            </Accordion.Content>
          </Accordion.Item>
        </Accordion.Root>
      </Box>
    </Main>
  );
};

export { HomePage };
