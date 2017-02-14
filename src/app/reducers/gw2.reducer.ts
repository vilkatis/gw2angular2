/*

temp2.forEach(function (item, itemIndex) {
    if (item != null) {
        if (merged.length == 0) {
            merged.push(item);

        } else {
            if (!merged.some(function (mergedItem, mergedIndex) {
                console.log(mergedItem);

            })) {
                merged.push(item);
            } else {
                let targetItem = merged.filter(function (targetItem) { return targetItem.id === item.id; })[0];
                targetItem.count += item.count;
            }
        }
    }

});

*/