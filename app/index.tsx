import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image, StyleSheet } from 'react-native';

const HomeScreen: React.FC = () => {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState<any | null>(null);
  const [searched, setSearched] = useState(false);

  const fetchUserData = async () => {
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (response.status === 404) {
        setUserData(null);
      } else {
        const data = await response.json();
        setUserData(data);
      }
      setSearched(true);
    } catch (error) {
      console.error('Erro ao buscar dados do usuário:', error);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Digite o nome de usuário do GitHub"
        value={username}
        onChangeText={setUsername}
      />
      <Button title="Buscar" onPress={fetchUserData} />
      {searched && !userData && (
        <Text>Usuário não encontrado na base de dados.</Text>
      )}
      {userData && (
        <View style={styles.userInfo}>
          <Image
            style={styles.avatar}
            source={{ uri: userData.avatar_url }}
          />
          <Text style={styles.userName}>{userData.name}</Text>
          <View style={styles.infoContainer}>
            <View style={styles.infoColumn}>
              <Text style={styles.infoLabel}> Repositórios</Text>
              <Text style={styles.infoValue}>{userData.public_repos}</Text>
            </View>
            <View style={styles.infoColumn}>
              <Text style={styles.infoLabel}> Seguidores</Text>
              <Text style={styles.infoValue}>{userData.followers}</Text>
            </View>
            <View style={styles.infoColumn}>
              <Text style={styles.infoLabel}> Seguindo</Text>
              <Text style={styles.infoValue}>{userData.following}</Text>
            </View>
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  userInfo: {
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 8,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 16,
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  infoColumn: {
    alignItems: 'center',
  },
  infoLabel: {
    fontSize: 12,
    color: '#333',
  },
  infoValue: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
