import React, { useContext } from "react";
import styled from "styled-components/native";

import { List, Avatar } from "react-native-paper";

import { Text } from "../../../components/typography/text.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { colors } from "../../../infrastructure/theme/colors";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";

const TransparentSafeArea = styled(SafeArea)`
  background-color: transparent;
`;
const SettingsBackground = styled.ImageBackground.attrs({
  source: require("../../../../assets/home.jpg"),
})`
  position: absolute;
  height: 100%;
  width: 100%;
`;

const SettingsItem = styled(List.Item)`
  padding: ${(props) => props.theme.space[3]};
  background-color: rgba(225, 225, 225, 0.9);
`;
const AvatarContainer = styled.View`
  align-items: center;
`;
const UserEmail = styled(Text)`
  color: ${colors.text.white};
`;

export const SettingsScreen = ({ navigation }) => {
  const { onLogout, user } = useContext(AuthenticationContext);
  return (
    <SettingsBackground>
      <TransparentSafeArea>
        <AvatarContainer>
          <Avatar.Icon
            size={180}
            icon="human"
            backgroundColor={colors.brand.primary}
          />
          <Spacer position="top" size="large">
            <UserEmail variant="label">{user.email}</UserEmail>
          </Spacer>
        </AvatarContainer>

        <List.Section>
          <SettingsItem
            title={<Text color={colors.ui.black}>Favourites</Text>}
            description="View your favourites"
            left={(props) => (
              <List.Icon {...props} color={colors.ui.error} icon="heart" />
            )}
            onPress={() => navigation.navigate("Favourites")}
          />
          <Spacer />
          <SettingsItem
            title={<Text color={colors.ui.black}>Payment</Text>}
            left={(props) => (
              <List.Icon {...props} color={colors.ui.black} icon="cart" />
            )}
            onPress={() => null}
          />
          <Spacer />
          <SettingsItem
            title={<Text color={colors.ui.black}>Past Orders</Text>}
            left={(props) => (
              <List.Icon {...props} color={colors.ui.black} icon="history" />
            )}
            onPress={() => null}
          />
          <Spacer />
          <SettingsItem
            title={<Text color={colors.ui.black}>Logout</Text>}
            left={(props) => (
              <List.Icon {...props} color={colors.ui.black} icon="door" />
            )}
            onPress={onLogout}
          />
        </List.Section>
      </TransparentSafeArea>
    </SettingsBackground>
  );
};
