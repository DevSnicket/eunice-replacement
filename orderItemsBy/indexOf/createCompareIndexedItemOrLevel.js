module.exports =
	getItemIndex => {
		return compareIndexedItemOrLevel;

		function compareIndexedItemOrLevel(
			leftIndexedItemOrLevel,
			rightIndexedItemOrLevel,
		) {
			const
				leftIndex = getIndexOfItemOrLevel(leftIndexedItemOrLevel.itemOrLevel),
				rightIndex = getIndexOfItemOrLevel(rightIndexedItemOrLevel.itemOrLevel);

			return (
				compareIndex()
				||
				compare(leftIndexedItemOrLevel.index, rightIndexedItemOrLevel.index)
			);

			function compareIndex() {
				return (
					leftIndex !== -1
					&&
					rightIndex !== -1
					&&
					compare(leftIndex, rightIndex)
				);
			}
		}

		function getIndexOfItemOrLevel(
			itemOrLevel,
		) {
			return (
				Array.isArray(itemOrLevel)
				?
				getIndexOfLevel(itemOrLevel)
				:
				getItemIndex(itemOrLevel)
			);
		}

		function getIndexOfLevel(
			level,
		) {
			return (
				level.length === 1
				?
				getItemIndex(level[0])
				:
				-1
			);
		}
	};

function compare(
	left,
	right,
) {
	return (
		left !== right
		&&
		(left < right ? -1 : 1)
	);
}