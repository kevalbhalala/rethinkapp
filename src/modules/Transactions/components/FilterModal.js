import moment from 'moment';
import React from 'react';
import {
  Modal,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import DatePicker from 'react-native-date-picker';
import FontistoIcon from 'react-native-vector-icons/Fontisto';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  CategoryItem,
  CustomButton,
  CustomHeader,
  ModalButton,
} from '../../../components';
import {dateRange, Strings, transactionsTypes} from '../../../constants';
import {useFilterData} from '../../../hooks';
import {
  Colors,
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../../theme';
import styling from './styles/FilterModalStyles';

const FilterModal = ({onPressBack, visible, theme}) => {
  const styles = styling(theme);
  const {
    open,
    toDate,
    fromDate,
    isFromDate,
    categoryOpen,
    dateRangeOpen,
    selectedCategory,
    selectedDateRange,
    transactionTypeData,
    setOpen,
    setToDate,
    setFromDate,
    setIsFromDate,
    setCategoryOpen,
    setDateRangeOpen,
    setSelectedCategory,
    setSelectedDateRange,
    setTransactionTypeData,
  } = useFilterData();

  const onPressSelectAll = (type, data, isSelectedAll) => {
    if (isSelectedAll) {
      const transactionObj = transactionTypeData;
      delete transactionObj?.[type];
      setTransactionTypeData({...transactionObj});
    } else {
      setTransactionTypeData({...transactionTypeData, [type]: data});
    }
  };
  const onPressType = (type, data) => {
    if (transactionTypeData?.hasOwnProperty(type)) {
      if (transactionTypeData?.[type]?.includes(data)) {
        const arrayData = transactionTypeData?.[type];
        const finalData = arrayData?.filter(element => element !== data);
        setTransactionTypeData({
          ...transactionTypeData,
          [type]: [...finalData],
        });
      } else {
        setTransactionTypeData({
          ...transactionTypeData,
          [type]: [...transactionTypeData?.[type], data],
        });
      }
    } else {
      setTransactionTypeData({...transactionTypeData, [type]: [data]});
    }
  };

  return (
    <Modal visible={visible ?? false} style={{flex: 1}}>
      <SafeAreaView style={styles.screen}>
        <CustomHeader
          theme={theme}
          headerTitle={Strings.filter}
          onPressBack={onPressBack}
        />
        <ScrollView style={styles.scrollView}>
          <View style={styles.container}>
            <View style={styles.card}>
              <View style={styles.cardHeader}>
                <Text style={styles.cardHeaderText}>{Strings.dateRange}</Text>
              </View>
              <ModalButton
                theme={theme}
                buttonLable={Strings.dateRange?.toUpperCase()}
                buttonValue={selectedDateRange}
                width={horizontalScale(320)}
                marginTop={verticalScale(10)}
                marginBottom={verticalScale(15)}
                onPressButton={() => setDateRangeOpen(true)}
              />
              <View style={styles.datePickerParent}>
                <ModalButton
                  theme={theme}
                  buttonLable={Strings.from?.toUpperCase()}
                  buttonValue={moment(fromDate)
                    ?.format('MMM DD,YYYY')
                    ?.toString()}
                  width={horizontalScale(155)}
                  marginRight={horizontalScale(10)}
                  onPressButton={() => {
                    setIsFromDate(true);
                    setOpen(true);
                  }}
                />
                <ModalButton
                  theme={theme}
                  buttonLable={Strings.to?.toUpperCase()}
                  buttonValue={moment(toDate)
                    ?.format('MMM DD,YYYY')
                    ?.toString()}
                  width={horizontalScale(155)}
                  onPressButton={() => {
                    setOpen(true);
                  }}
                />
              </View>
            </View>
            <View style={styles.card}>
              <View style={styles.cardHeader}>
                <Text style={styles.cardHeaderText}>
                  {Strings.transactionType}
                </Text>
              </View>
              {transactionsTypes?.map((item, index) => {
                const selectedTypes = transactionTypeData?.[item?.title];
                const isSelectedAll =
                  JSON.stringify(selectedTypes) === JSON.stringify(item?.types);
                return (
                  <View style={styles.trasactionTypeParent} key={index}>
                    <View style={styles.trasactionTypeHeader}>
                      <Text style={styles.trasactionTypeHeaderTitle}>
                        {item?.title ?? ''}
                      </Text>
                      <TouchableOpacity
                        onPress={() =>
                          onPressSelectAll(
                            item.title,
                            item.types,
                            isSelectedAll,
                          )
                        }>
                        <Text style={styles.selectAll}>
                          {isSelectedAll
                            ? Strings.unSelectAll
                            : Strings.selectAll}
                        </Text>
                      </TouchableOpacity>
                    </View>
                    <View style={styles.typesParent}>
                      {item?.types?.map((element, index) => {
                        const isSelcted = selectedTypes?.includes(element);
                        return (
                          <CustomButton
                            theme={theme}
                            buttonTitle={element}
                            buttonTitleStyle={[
                              styles.typeButtonText,
                              isSelcted && styles.whiteText,
                            ]}
                            buttonStyle={[
                              styles.typeButton,
                              isSelcted && styles.selectedTypeButton,
                            ]}
                            buttonActiveOpacity={1}
                            onBtnPress={() => onPressType(item?.title, element)}
                            key={index}
                          />
                        );
                      })}
                    </View>
                  </View>
                );
              })}
            </View>
            <View style={styles.card}>
              <View style={styles.cardHeader}>
                <Text style={styles.cardHeaderText}>
                  {Strings.transactionCategory}
                </Text>
              </View>
              <ModalButton
                theme={theme}
                buttonValue={Strings.category?.toUpperCase()}
                width={horizontalScale(320)}
                marginTop={verticalScale(10)}
                marginBottom={verticalScale(15)}
                onPressButton={() => setCategoryOpen(true)}
              />
            </View>
          </View>
        </ScrollView>
        <View style={styles.applyFilterParent}>
          <CustomButton
            theme={theme}
            buttonTitle={Strings.applyFilters}
            buttonTitleStyle={styles.applyFilter}
            buttonStyle={styles.applyFilterButton}
          />
        </View>
        <DatePicker
          modal
          open={open}
          mode={'date'}
          date={fromDate}
          onConfirm={date => {
            isFromDate ? setFromDate(date) : setToDate(date);
            setIsFromDate(false);
            setOpen(false);
          }}
          onCancel={() => {
            setIsFromDate(false);
            setOpen(false);
          }}
        />
        {dateRangeOpen ? (
          <TouchableOpacity
            style={styles.dateRangePicker}
            activeOpacity={1}
            onPress={() => setDateRangeOpen(false)}>
            <View style={styles.dateRangePickerContainer}>
              <Text style={styles.dateRangePickerHeader}>
                {Strings.dateRange}
              </Text>
              <View style={styles.divider} />
              {dateRange?.map((item, index) => {
                const isSelcted = item === selectedDateRange;
                return (
                  <View key={index}>
                    <TouchableOpacity
                      style={styles.dateRangeDetailParent}
                      onPress={() => {
                        setSelectedDateRange(item);
                        setDateRangeOpen(false);
                      }}>
                      <Text
                        style={[
                          styles.dateRangeDetail,
                          isSelcted && styles.selectedDateRange,
                        ]}>
                        {item}
                      </Text>
                      {isSelcted ? (
                        <Icon
                          name="checkmark"
                          size={moderateScale(28)}
                          color={Colors[theme]?.blue}
                        />
                      ) : (
                        <></>
                      )}
                    </TouchableOpacity>
                    {index !== dateRange?.length - 1 ? (
                      <View
                        style={[
                          styles.divider,
                          {marginHorizontal: horizontalScale(14)},
                        ]}
                      />
                    ) : (
                      <></>
                    )}
                  </View>
                );
              })}
            </View>
          </TouchableOpacity>
        ) : (
          <></>
        )}
        {categoryOpen ? (
          <TouchableOpacity
            style={styles.dateRangePicker}
            activeOpacity={1}
            onPress={() => setCategoryOpen(false)}>
            <View style={styles.dateRangePickerContainer}>
              <Text style={styles.dateRangePickerHeader}>
                {Strings.category}
              </Text>
              <View style={styles.searchBarPanel}>
                <View style={styles.searchBarParent}>
                  <View style={styles.searchRightIcon}>
                    <FontistoIcon name="search" size={moderateScale(18)} />
                  </View>
                  <View style={styles.searchBar}>
                    <TextInput placeholder={Strings.searchByName} />
                  </View>
                </View>
              </View>
              <View style={styles.divider} />
              <ScrollView style={styles.categoryDetail}>
                <View style={styles.incomeParent}>
                  <Text style={styles.categoryDetailTitle}>
                    {Strings.income?.toUpperCase()}
                  </Text>
                  <CategoryItem
                    theme={theme}
                    categoryName={'Contact'}
                    iconSource={{
                      uri: 'https://www.clipartmax.com/png/middle/480-4800097_contact-us-contact-us-round-icon.png',
                    }}
                    onPressCategory={() => setCategoryOpen(false)}
                  />
                </View>
                <View style={styles.incomeParent}>
                  <Text style={styles.categoryDetailTitle}>
                    {Strings.spending?.toUpperCase()}
                  </Text>
                  <CategoryItem
                    theme={theme}
                    categoryName={'Contact'}
                    iconSource={{
                      uri: 'https://www.clipartmax.com/png/middle/480-4800097_contact-us-contact-us-round-icon.png',
                    }}
                    onPressCategory={() => setCategoryOpen(false)}
                  />
                </View>
              </ScrollView>
            </View>
          </TouchableOpacity>
        ) : (
          <></>
        )}
      </SafeAreaView>
    </Modal>
  );
};

export default FilterModal;
