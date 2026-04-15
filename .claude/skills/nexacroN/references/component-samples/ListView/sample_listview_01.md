# sample_listview_01

**Category:** ListView
**Keywords:** `bandexpandtype, bandindentsize`

## Description

Expressing Basic & Detailed Data

## Form Information

- **Form ID:** sample_listview_01
- **Size:** 1024 x 768

## Components

| ID | Type | Key Properties |
|----|------|----------------|
| ListView00 | ListView | binddataset="Dataset00" |
| Radio00 | Radio | text="expand", value="expand" |
| Spin00 | Spin | value="0" |

## Datasets

### Dataset00

**Columns:**

| Column | Type |
|--------|------|
| title | STRING |
| release | STRING |
| cover | STRING |
| songs | STRING |

**Sample Data:**

```json
[
  {
    "title": "The Freewheelin' Bob Dylan",
    "release": 1963,
    "songs": "Side one\n1. Blowin' in the Wind\n2. Girl from the North Country\n3. Masters of War\n4. Down the Highway\n5. Bob Dylan's Blues\n6. A Hard Rain's a-Gonna Fall\n\nSide two\n1. Don't Think Twice, It's All Right\n2. Bob Dylan's Dream\n3. Oxford Town\n4. Talkin' World War III Blues\n5. Corrina, Corrina\n6. Honey, Just Allow Me One More Chance\n7. I Shall Be Free",
    "cover": "imagerc::Bob_Dylan_-_The_Freewheelin'_Bob_Dylan.jpg"
  },
  {
    "title": "Highway 61 Revisited",
    "release": 1965,
    "songs": "Side one\n1. Like a Rolling Stone\n2. Tombstone Blues\n3. It Takes a Lot to Laugh, It Takes a Train to Cry\n4. From a Buick 6\n5. Ballad of a Thin Man\n\nSide two\n1. Queen Jane Approximately\n2. Highway 61 Revisited\n3. Just Like Tom Thumb's Blues\n4. Desolation Row",
    "cover": "imagerc::Bob_Dylan_-_Highway_61_Revisited.jpg"
  },
  {
    "title": "Blood on the Tracks",
    "release": 1975,
    "songs": "Side one\n1. Tangled Up in Blue\n2. Simple Twist of Fate\n3. You're a Big Girl Now\n4. Idiot Wind\n5. You're Gonna Make Me Lonesome When You Go\n\nSide two\n6. Meet Me in the Morning\n7. Lily, Rosemary and the Jack of Hearts\n8. If You See Her, Say Hello\n9. Shelter from the Storm\n10. Buckets of Rain",
    "cover": "imagerc::Bob_Dylan_-_Blood_on_the_Tracks.jpg"
  }
]
```

## Source Code

```javascript
this.Radio00_onitemchanged = function(obj:nexacro.Radio,e:nexacro.ItemChangeEventInfo)
{
	this.ListView00.set_bandexpandtype(e.postvalue);
};



this.Spin00_onchanged = function(obj:nexacro.Spin,e:nexacro.ChangeEventInfo)
{
	this.ListView00.set_bandindentsize(e.postvalue);
};
```

---

[Back to ListView](./README.md) | [Back to Index](../INDEX.md)