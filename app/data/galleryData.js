import Mock from 'mockjs';

let galleryData = Mock.mock({
    "obj": {
        "carousel":[
            "吃铁丝，拉笊篱，真能编！",
            "吃冰棍，拉冰棍，没话儿！",
            "吃馒头，拉花卷，我赚了！"
        ],
        "cardData|4":[
            {
                "area":"@province",
                "num":"@image('200x120', '#ccc')"
            }
        ]
    }
})

export default galleryData;