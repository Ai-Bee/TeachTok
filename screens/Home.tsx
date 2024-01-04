import React, {useEffect, useState} from 'react';
import {FlatList, RefreshControl, StyleSheet, Text, View} from 'react-native';
import GenericContainer from '../components/GenericContainer';
import CardInstance from '../components/CardInstance';
import axios from 'axios';
import {question} from '../types';

// ... (imports remain the same)

const Home = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [answer, setAnswer] = useState<string | null>(null);
  const [records, setRecords] = useState<question[]>([]);

  const onRefresh = () => {
    fetchQuestions();
  };

  const fetchQuestions = async () => {
    setRefreshing(true);
    setAnswer(null);

    try {
      const {data, status} = await axios.get(
        'https://cross-platform.rp.devfactory.com/for_you',
      );

      if (status === 200) {
        const newQuestion = data;
        setRecords(prevRecords => [...prevRecords, newQuestion]);
      }
    } catch (error) {
      handleRequestError(error);
    } finally {
      setRefreshing(false);
    }
  };

  const checkAnswer = async (id: number) => {
    try {
      const {data, status} = await axios.get(
        `https://cross-platform.rp.devfactory.com/reveal?id=${id}`,
      );

      if (status === 200) {
        setAnswer(data.correct_options[0].id);
      }
    } catch (error) {
      handleRequestError(error);
    }
  };

  const handleRequestError = (error: any) => {
    console.error('Request failed:', error);
  };

  const renderList = ({item}: {item: question}) => (
    <CardInstance
      emitSelectedOption={() => checkAnswer(item.id)}
      correctAnswer={answer}
      data={item}
    />
  );

  useEffect(() => {
    fetchQuestions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <GenericContainer>
      <FlatList
        data={records}
        renderItem={renderList}
        onEndReached={onRefresh}
        onEndReachedThreshold={0.5}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            enabled={true}
            tintColor={'gray'}
            onRefresh={onRefresh}
          />
        }
        ListEmptyComponent={
          <View style={styles.page}>
            <Text style={styles.textMain}>Please wait.</Text>
          </View>
        }
      />
    </GenericContainer>
  );
};

const styles = StyleSheet.create({
  page: {
    padding: 25,
    marginTop: 60,
    height: '100%',
    backgroundColor: '#107633',
  },
  textMain: {
    alignSelf: 'center',
    fontSize: 20,
    paddingBottom: 30,
    color: '#344B67',
  },
});

export default Home;
