class Util {
  checkExistByName(name, arr) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].name === name) {
        return true;
      }
    }
    return false;
  }

  getRandomElements(originalArray, numberOfElements) {
    // Kiểm tra xem số lượng phần tử cần lấy có lớn hơn độ dài của mảng hay không
    if (numberOfElements > originalArray.length) {
      console.error("Số lượng phần tử cần lấy lớn hơn độ dài của mảng.");
      return;
    }

    // Sao chép mảng gốc để không làm thay đổi nó
    const arrayCopy = [...originalArray];

    // Mảng để lưu trữ kết quả
    const resultArray = [];

    // Lấy ngẫu nhiên phần tử và loại bỏ nó khỏi mảng sao chép
    for (let i = 0; i < numberOfElements; i++) {
      const randomIndex = Math.floor(Math.random() * arrayCopy.length);
      const randomElement = arrayCopy.splice(randomIndex, 1)[0];
      resultArray.push(randomElement._id);
    }
    return resultArray;
  }
}



module.exports = Util;