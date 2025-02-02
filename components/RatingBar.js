import StarSvg from "./../assets/svg/starSvg";
import { View, TouchableOpacity } from "react-native";

export default function RatingBar({ rating, setRating }) {
  const handleRating = (selectedRating) => {
    setRating(selectedRating);
  };

  const renderStar = (index) => {
    const isSelected = index < rating;

    return (
      <TouchableOpacity key={index} onPress={() => handleRating(index + 1)}>
        <StarSvg fill={isSelected ? "gold" : "gray"} width={30} height={30} />
      </TouchableOpacity>
    );
  };

  return (
    <View style={{ flexDirection: "row" }}>
      {Array.from({ length: 10 }, (_, index) => renderStar(index))}
    </View>
  );
}
