import React from 'react';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import {horizontalScale, moderateScale, verticalScale} from '../../theme';

const ContentLoader = () => {
  return (
    <SkeletonPlaceholder borderRadius={moderateScale(4)}>
      <SkeletonPlaceholder.Item
        flexDirection="row"
        alignItems="center"
        marginTop={verticalScale(6)}>
        <SkeletonPlaceholder.Item
          width={moderateScale(40)}
          height={moderateScale(40)}
          borderRadius={moderateScale(10)}
        />
        <SkeletonPlaceholder.Item marginLeft={horizontalScale(20)}>
          <SkeletonPlaceholder.Item flexDirection="row">
            <SkeletonPlaceholder.Item
              width={horizontalScale(220)}
              height={verticalScale(20)}
            />
            <SkeletonPlaceholder.Item
              width={horizontalScale(30)}
              height={verticalScale(20)}
              marginLeft={horizontalScale(2)}
            />
          </SkeletonPlaceholder.Item>
          <SkeletonPlaceholder.Item
            marginTop={verticalScale(6)}
            width={horizontalScale(250)}
            height={verticalScale(20)}
          />
        </SkeletonPlaceholder.Item>
      </SkeletonPlaceholder.Item>
      <SkeletonPlaceholder.Item
        height={verticalScale(3)}
        width={horizontalScale(350)}
        marginTop={verticalScale(8)}
      />
    </SkeletonPlaceholder>
  );
};

export default ContentLoader;
