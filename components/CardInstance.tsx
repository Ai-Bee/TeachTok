import {
  Image,
  ImageBackground,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from 'react-native';
import React, {PropsWithChildren, useEffect, useState} from 'react';
import SVGElement from './SVGElement';
import {question} from '../types';

type CardInstanceProps = PropsWithChildren<{
  data: question;
  correctAnswer?: string | null;
  emitSelectedOption: () => void;
}>;

export default function CardInstance({
  data,
  correctAnswer = null,
  emitSelectedOption,
}: CardInstanceProps): React.JSX.Element {
  const {
    imgBackground,
    iconText,
    topBar,
    topBarTextLeft,
    courseTitle,
    courseSubText,
    underline,
    topBarMainText,
    topBarMiddle,
    bottomLine,
    bottomText,
    relative,
    topBarLeft,
    contentContainer,
    questionText,
    optionText,
    section2Bottom,
    optionStyle,
    correctOption,
    incorrectOption,
    plusIcon,
    shift,
    avatar,
    iconColumn,
    secondHalf,
  } = styles;
  const {height} = useWindowDimensions();
  const [selection, setSelection] = useState<null | string>(null);
  const [buttonsDisabled, setButtonsDisabled] = useState(false);

  const {
    description,
    image,
    options,
    playlist: playlistName,
    question: returnedQuestion,
    user,
  } = data;

  useEffect(() => {
    setButtonsDisabled(false);
    setSelection(null);
  }, [data]);

  const computedIcon = (arg: string) => {
    if (correctAnswer) {
      if (correctAnswer === arg) {
        return 'thumbs-up';
      } else {
        return 'thumbs-down';
      }
    }

    return 'thumbs-down';
  };

  const shouldShowIcon = (arg: string): boolean => {
    if (arg === selection || arg === correctAnswer) {
      return true;
    }
    return false;
  };

  const handleSelection = (arg: string) => {
    setSelection(arg);
    emitSelectedOption();
  };

  const isCorrect = (arg: string): boolean => {
    if (correctAnswer === arg) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <ImageBackground
      source={{
        uri: image,
      }}
      resizeMode="cover"
      style={[imgBackground, {height}]}>
      <View style={topBar}>
        <View style={topBarLeft}>
          <SVGElement title="stopwatch" />
          <Text style={topBarTextLeft}>10 min</Text>
        </View>
        <View style={topBarMiddle}>
          <Text style={topBarMainText}>For You</Text>
          <View style={underline} />
        </View>
        <SVGElement title="search-icon" />
      </View>
      <View style={contentContainer}>
        <Text style={questionText}>{returnedQuestion}</Text>
        <View style={secondHalf}>
          <View style={section2Bottom}>
            {options.map(value => (
              <TouchableOpacity
                onPress={() => handleSelection(value.id)}
                disabled={buttonsDisabled}
                style={[
                  optionStyle,
                  shouldShowIcon(value.id)
                    ? isCorrect(value.id)
                      ? correctOption
                      : incorrectOption
                    : null,
                ]}>
                <Text style={optionText}>{value.answer}</Text>
                {shouldShowIcon(value.id) && (
                  <View style={[isCorrect(value.id) ? shift : null]}>
                    <SVGElement title={computedIcon(value.id)} />
                  </View>
                )}
              </TouchableOpacity>
            ))}
            <View>
              <Text style={courseTitle}>AP US History</Text>
              <Text style={courseSubText}>{description}</Text>
            </View>
          </View>

          <View style={iconColumn}>
            <View style={relative}>
              <Image style={avatar} source={{uri: user.avatar}} />
              <View style={plusIcon}>
                <SVGElement title="plus-icon" />
              </View>
            </View>
            <View>
              <SVGElement title="heart" />
              <Text style={iconText}> 37</Text>
            </View>
            <View>
              <SVGElement title="comment-bubble" />
              <Text style={iconText}> 7</Text>
            </View>
            <View>
              <SVGElement focused title="bookmark" />
              <Text style={iconText}> 27</Text>
            </View>
            <View>
              <SVGElement title="send" />
              <Text style={iconText}> 17</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={bottomLine}>
        <View style={topBarLeft}>
          <SVGElement title="playlist" />
          <Text style={bottomText}>Playlist • {playlistName}</Text>
        </View>
        <SVGElement title="caret-right" />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  imgBackground: {
    flex: 1,
    paddingTop: 45,
  },
  topBar: {
    flexDirection: 'row',
    paddingHorizontal: 40,
    justifyContent: 'space-between',
  },
  topBarTextLeft: {
    color: 'rgba(255, 255, 255, 0.60)',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '400',
  },
  topBarMainText: {
    color: 'white',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 22,
    letterSpacing: -0.16,
  },
  underline: {
    width: 30,
    backgroundColor: 'white',
    height: 4,
  },
  relative: {
    position: 'relative',
  },
  topBarMiddle: {
    alignItems: 'center',
    gap: 3,
  },
  topBarLeft: {
    flexDirection: 'row',
    gap: 3,
  },
  questionText: {
    color: '#FFF',
    backgroundColor: 'rgba(2, 2, 2, 0.60)',
    padding: 7,
    borderRadius: 8,
    fontSize: 22,
    marginHorizontal: 30,
    fontStyle: 'normal',
    fontWeight: '500',
  },
  bottomLine: {
    backgroundColor: 'black',
    paddingHorizontal: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    width: '100%',
    bottom: 20,
    height: 40,
  },
  bottomText: {
    paddingLeft: 10,
    color: '#FFF',
    fontSize: 13,
    fontStyle: 'normal',
    fontWeight: '600',
  },
  contentContainer: {
    height: '100%',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingVertical: 20,
    paddingTop: 40,
    paddingBottom: 100,
  },
  optionStyle: {
    width: 294,
    height: 52,
    padding: 12,
    borderRadius: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.50)',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  plusIcon: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 49,
    backgroundColor: '#28B18F',
    left: 10,
    padding: 5,
    bottom: -11,
  },
  optionText: {
    color: '#FFF',
    textShadowColor: 'rgba(0, 0, 0, 0.45)',
    textShadowOffset: {
      width: 2,
      height: 1.5,
    },
    textShadowRadius: 1,
    fontSize: 17,
    fontStyle: 'normal',
    fontWeight: '500',
  },
  secondHalf: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'flex-end',
    paddingBottom: 30,
    justifyContent: 'space-evenly',
  },
  iconText: {
    color: '#FFF',
    textAlign: 'center',
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: '500',
    letterSpacing: -0.12,
  },
  section2Bottom: {
    gap: 10,
  },
  iconColumn: {
    gap: 20,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  courseTitle: {
    color: '#FFF',
    fontSize: 15,
    fontWeight: '600',
  },
  shift: {
    marginTop: -10,
  },
  courseSubText: {
    color: '#FFF',
    fontSize: 13,
    fontWeight: '400',
  },
  correctOption: {
    backgroundColor: 'rgba(40, 177, 143, 0.70)',
  },
  incorrectOption: {
    backgroundColor: 'rgba(220, 95, 95, 0.70)',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 45,
    borderWidth: 1,
    borderColor: '#FFFFFF',
    ...Platform.select({
      ios: {
        shadowColor: 'rgba(0, 0, 0, 0.45)',
        shadowOffset: {width: 1, height: 1.5},
        shadowOpacity: 0.5,
        shadowRadius: 2,
      }
    }),
  },
});
