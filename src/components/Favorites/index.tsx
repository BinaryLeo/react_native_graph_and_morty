import {
  Modal,
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";
import { Entypo } from "@expo/vector-icons";

import { useSelector, useDispatch } from "react-redux";
import {
  favoriteStateData,
  removeFavoriteCharacter,
} from "../../store/modules/Favorite/reducer";
import {
  Container,
  CharBox,
  BottomBox,
  CloseButton,
  RemoveBox,
  LeaveBox,
} from "./styles";

export interface Props {
  isModalOpen: boolean;
  setIsModalOpen: (value: boolean) => void;
}

export function FavoriteCharModal({ isModalOpen, setIsModalOpen }: Props) {
  const favorites = useSelector(favoriteStateData);
  const dispatch = useDispatch();

  const handleRemoveCharacter = (id: number) => {
    dispatch(removeFavoriteCharacter(id));
  };

  return (
    <Modal
      animationType="slide"
      visible={isModalOpen}
      onRequestClose={() => setIsModalOpen(false)}
      transparent={true}
    >
      <View style={styles.modalBackground}>
        {favorites.length > 0 ? (
          <View style={styles.modalContainer}>
            <View style={{flex: 4}}>
            <ScrollView showsVerticalScrollIndicator={false}>
              {favorites.map((character, index) => (
                <Container key={index}>
                  <CharBox>
                    <Image
                      style={{
                        height: 80,
                        width: 80,
                        marginBottom: 10,
                        borderRadius: 50,
                      }}
                      source={{ uri: `${character.image}` }}
                    />
                    <BottomBox>
                      <Text style={{ color: "white" }}>
                        {character.name.split(" ")[0]}
                      </Text>
                      <TouchableOpacity
                        onPress={() => handleRemoveCharacter(character.id)}
                      >
                        <RemoveBox>
                          <Entypo name="remove-user" size={20} color="#fff" />
                          <Text style={{ color: "white", marginLeft: 5 }}>
                            {" "}
                            Remove
                          </Text>
                        </RemoveBox>
                      </TouchableOpacity>
                    </BottomBox>
                  </CharBox>
                </Container>
              ))}
              
            </ScrollView>
            </View>
            <View style={{flex: 1, marginTop: 20, width: '100%'}}>
            <CloseButton onPress={() => setIsModalOpen(false)}>
                <Text>Close</Text>
              </CloseButton>
            
           </View>
          </View>
        ) : (
          <View>
            <LeaveBox>
              <Text style={{ color: "white", fontSize: 16, marginBottom: 10 }}>
                Nothing to see.
              </Text>
              <CloseButton onPress={() => setIsModalOpen(false)}>
                <Text style={{ color: "black", fontSize: 16, padding: 10 }}>
                  Close Window
                </Text>
              </CloseButton>
            </LeaveBox>
          </View>
        )}
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    flexDirection:"column",
    width: "65%",
    height: "50%",
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "#E435AB",
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderRadius: 20,
    elevation: 20,
  },
});
