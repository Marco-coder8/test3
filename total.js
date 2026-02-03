function calculateTotal() {
    let total = 0;
    // الحصول على كل حاويات الزهور
    const flowerItems = document.querySelectorAll('.flower-item');

    flowerItems.forEach(item => {
        //  ايجاد الكمية و صندوق الاختيار او العناصر المحددة
        const checkbox = item.querySelector('input[type="checkbox"]');
        const quantitySelect = item.querySelector('select');

        //  Get the price from the data-price attribute we added
        const price = parseFloat(checkbox.getAttribute('data-price'));

        // الشرط + المعادلة
        if (checkbox.checked) {
            const quantity = parseInt(quantitySelect.value);
            total += price * quantity;
        }
    });

    // 5. Update the display at the bottom
    document.getElementById('totalDisplay').innerText = "Total: " + total + "$";

    // رسالة للمستخدم عند عدم تحديد ااي شيء
    if (total === 0) {
        alert("Please select at least one flower and a quantity!");
    }
}