import React, { useState } from 'react';
import { View, Text, Button, Modal, StyleSheet, FlatList } from 'react-native';
import tw from 'twrnc';  // Assuming you have the 'twrnc' utility for styling
import NavbarC from '../components/navbar';

function Logros({ unlockedArchivements }) {
    const archivementsList = [
        { id: 1, group: "Back", archivements: "Master of the Mighty Lats", requeriments: 250 },
        { id: 2, group: "Back", archivements: "Sultan of Sculpted Scapulae", requeriments: 500 },
        { id: 3, group: "Back", archivements: "Conqueror of the Cobra Muscles", requeriments: 750 },
        { id: 4, group: "Back", archivements: "Overlord of the Opposing Deltoids", requeriments: 1000 },
        { id: 5, group: "Back", archivements: "Ruler of the Radiant Rhomboids", requeriments: 1250 },
        
        { id: 6, group: "Chest", archivements: "Supreme Sovereign of the Sternum", requeriments: 250 },
        { id: 7, group: "Chest", archivements: "Duke of the Dazzling Pectorals", requeriments: 500 },
        { id: 8, group: "Chest", archivements: "Monarch of the Majestic Mammary Muscles", requeriments: 750 },
        { id: 9, group: "Chest", archivements: "Emperor of the Enigmatic Endopectorals", requeriments: 1000 },
        { id: 10, group: "Chest", archivements: "Pharaoh of the Phenomenal Pecs", requeriments: 1250 },
      
        { id: 11, group: "Core", archivements: "Sorcerer of the Solid Six-Pack", requeriments: 250 },
        { id: 12, group: "Core", archivements: "Wizard of the Wondrous Waistline", requeriments: 500 },
        { id: 13, group: "Core", archivements: "Magician of the Marvelous Midsection", requeriments: 750 },
        { id: 14, group: "Core", archivements: "Enchanter of the Extraordinary Abdominals", requeriments: 1000 },
        { id: 15, group: "Core", archivements: "Illusionist of the Incredible Inner Core", requeriments: 1250 },
      ];
      
      

      const [selectedArchivement, setSelectedArchivement] = useState(null);

      const handleArchivementClick = (archivement) => {
        setSelectedArchivement(archivement);
      };
    
      const handleCloseModal = () => {
        setSelectedArchivement(null);
      };
    
      const getRandomColor = () => {
        const randomColor = Math.floor(Math.random() * 16777215).toString(16);
        return `#${randomColor}`;
      };
    
      const renderArchivementItem = ({ item }) => (
        <View style={tw.style(styles.listItemContainer)}>
          <Button
            onPress={() => handleArchivementClick(item)}
            title={item.archivements}
            color={getRandomColor()}
          />
        </View>
      );
    
      return (
        <View style={{ ...tw.style('bg-gray-50'), backgroundColor: 'rgb(17, 24, 39)', flex: 1 }}>
        <NavbarC></NavbarC>

          <Text style={tw.style(styles.legend)}>
            ¡ Logros por Desbloquear !
          </Text>
          <FlatList
            data={archivementsList}
            renderItem={renderArchivementItem}
            keyExtractor={(item) => item.id.toString()}
            contentContainerStyle={tw.style(styles.listContainer)}
          />
    
          {selectedArchivement && (
            <Modal
              animationType="slide"
              transparent={true}
              visible={selectedArchivement !== null}
            >
              <View style={tw.style(styles.modalContainer)}>
                <View style={tw.style(styles.modalContent)}>
                  <Text style={tw.style(styles.modalTitle)}>
                    {selectedArchivement.archivements}
                  </Text>
                  <Text style={tw.style(styles.modalText)}>
                    Necesitas {selectedArchivement.requeriments} kg en {selectedArchivement.group} para desbloquear este logro.
                  </Text>
                  <Button
                    onPress={handleCloseModal}
                    title="Cerrar"
                    color="#5cb85c" // Adjust the color as needed
                  />
                </View>
              </View>
            </Modal>
          )}
        </View>
      );
    }
    
    const styles = StyleSheet.create({
      legend: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 32,
        marginBottom: 16,
      },
      listContainer: {
        paddingHorizontal: 16,
      },
      listItemContainer: {
        marginVertical: 8,
      },
      modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
      },
      modalContent: {
        backgroundColor: 'white',
        padding: 16,
        borderRadius: 8,
        width: '80%',
      },
      modalTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
      },
      modalText: {
        fontSize: 16,
        marginBottom: 16,
      },
    });
    
    export default Logros;