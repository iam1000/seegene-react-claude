# Layout Properties

| Property | Description |
|----------|-------------|
| `description` | Form 에 정의된 Layout 에 대한 사용자 설명을 설정하는 속성입니다. |
| `flexcrossaxisalign` | Layout 컨테이너 내 Cross Axis(type 속성값이 "horizontal"이면 수직축, type 속성값이 "vertical"이면 수평 |
| `flexcrossaxiswrapalign` | flexwrap 속성값을 "wrap"으로 설정한 경우 Layout 컨테이너 내 Cross Axis(type 속성값이 "horizontal"이면  |
| `flexmainaxisalign` | Layout 컨테이너 내 Main Axis(type 속성값이 "horizontal"이면 수평축, type 속성값이 "vertical"이면 수직축 |
| `flexwrap` | 컴포넌트가 배치되면서 Layout 컨테이너 영역을 넘어갈 때 줄바꿈 여부를 설정합니다. |
| `height` | Form 에 정의된 현재 Layout 의 높이를 설정하는 속성입니다. |
| `horizontalgap` | Layout 컨테이너 내 배치된 컴포넌트(또는 Cell)의 수평축 간격을 설정하는 속성입니다. |
| `initvalueid` | Layout 에 적용될 InitValue 의 ID 를 설정하는 속성입니다. |
| `mobileorientation` | 모바일 환경에서 LayOut 이 표시될 디바이스의 방향값을 설정하는 속성입니다. |
| `name` | Layout 의 이름을 설정하는 속성입니다. |
| `screenid` | Layout 이 적용될 Screen 의 ID 를 설정하는 속성입니다. |
| `spacing` | Layout 컨테이너와 컴포넌트 간 여백을 설정하는 속성입니다. |
| `stepcount` | Layout 의 화면이 분할되는 갯수를 설정하는 속성입니다. |
| `stepindex` | Layout 에 분할된 화면 중 표시할 화면의 인덱스를 설정하는 속성입니다. |
| `tablecellalign` | Layout 컨테이너 내 가상의 Table Cell의 배치 방식을 설정합니다. |
| `tablecellincompalign` | Layout 컨테이너 내 가상의 Table Cell 영역 내에서 컴포넌트의 배치 방식을 설정합니다. |
| `tabledirection` | Layout 컨테이너 내 가상의 Table Cell에 컴포넌트가 자동으로 배치되는 방향을 설정하는 속성입니다. |
| `tabletemplate` | Layout 컨테이너 내 가상의 Table Cell을 설정합니다. |
| `tabletemplatearea` | Layout 컨테이너 내 가상의 Table Cell의 이름을 설정하는 속성입니다. |
| `type` | Layout 컨테이너 내 컴포넌트 배치 기준을 설정하는 속성입니다. |
| `verticalgap` | Layout 컨테이너 내 배치된 컴포넌트(또는 Cell)의 수직축 간격을 설정하는 속성입니다. |
| `width` | Form 에 정의된 현재 Layout 의 너비를 설정하는 속성입니다. |

---

## description

Form 에 정의된 Layout 에 대한 사용자 설명을 설정하는 속성입니다.

**Syntax**
```javascript
Layout.description
```

**Setting Syntax**
```javascript
현재 Layout 에 대한 추가정보 및 사용자 정보를 설정합니다.
```

**Remark**
- 넥사크로 스튜디오에서만 값을 설정할 수 있고, 실행중에는 수정할 수 없는 속성입니다.

- 기능에 영향을 주지 않고, 추가적인 정보만 저장하는 속성입니다.

- Layout 마다 다르게 설정할 수 있습니다.

---

## flexcrossaxisalign

Layout 컨테이너 내 Cross Axis(type 속성값이 "horizontal"이면 수직축, type 속성값이 "vertical"이면 수평축)을 기준으로 컴포넌트의 배치 방식을 설정합니다.

**Syntax**
```javascript
Layout.flexcrossaxisalign
```

**Setting Syntax**
```javascript
Cross Axis 가운데 위치에 맞추어 배치됩니다.
```

**Remark**
- 넥사크로 스튜디오에서만 값을 설정할 수 있고, 실행 중에는 수정할 수 없는 속성입니다.

- flexcrossaxisalign 속성값을 설정하지 않으면 "start"로 설정됩니다.

- flexwrap 속성값을 "wrap"으로 설정하고 줄바꿈이 발생한 경우에는 각 행 또는 열 영역에 대한 배치만 처리합니다.
   전체 컴포넌트를 묶어서 배치하는 것은 flexcrossaxiswrapalign 속성에서 처리합니다.

---

## flexcrossaxiswrapalign

flexwrap 속성값을 "wrap"으로 설정한 경우 Layout 컨테이너 내 Cross Axis(type 속성값이 "horizontal"이면 수직축, type 속성값이 "vertical"이면 수평축)을 기준으로 컴포넌트의 배치 방식을 설정합니다.

**Syntax**
```javascript
Layout.flexcrossaxiswrapalign
```

**Setting Syntax**
```javascript
Cross Axis를 기준으로 시작 위치와 첫 번째 컴포넌트 사이의 간격, 각 컴포넌트 사이의 간격, 마지막 컴포넌트와 끝 위치 사이의 간격이 같도록 컴포넌트를 배치합니다.
```

**Remark**
- 넥사크로 스튜디오에서만 값을 설정할 수 있고, 실행 중에는 수정할 수 없는 속성입니다.

- flexcrossaxiswrapalign 속성값을 설정하지 않으면 "start"로 설정됩니다.

- 줄바꿈 처리 시 각 행과 열의 영역 크기가 다를 수 있고 컴포넌트의 배치 위치에 영향을 미칩니다.

- spacing, verticalgap, horizontalgap 속성값에서 설정한 값을 제외한 여백을 기준으로 간격을 조정해 컴포넌트를 배치합니다. 여백이 없는 경우에는 동작하지 않습니다.

---

## flexmainaxisalign

Layout 컨테이너 내 Main Axis(type 속성값이 "horizontal"이면 수평축, type 속성값이 "vertical"이면 수직축)을 기준으로 컴포넌트의 배치 방식을 설정합니다.

**Syntax**
```javascript
Layout.flexmainaxisalign
```

**Setting Syntax**
```javascript
Main Axis를 기준으로 시작 위치와 첫 번째 컴포넌트 사이의 간격, 각 컴포넌트 사이의 간격, 마지막 컴포넌트와 끝 위치 사이의 간격이 같도록 컴포넌트를 배치합니다.
```

**Remark**
- 넥사크로 스튜디오에서만 값을 설정할 수 있고, 실행 중에는 수정할 수 없는 속성입니다.

- flexmainaxisalign 속성값을 설정하지 않으면 "start"로 설정됩니다.

- spacing, verticalgap, horizontalgap 속성값에서 설정한 값을 제외한 여백을 기준으로 간격을 조정해 컴포넌트를 배치합니다. 여백이 없는 경우에는 동작하지 않습니다.

---

## flexwrap

컴포넌트가 배치되면서 Layout 컨테이너 영역을 넘어갈 때 줄바꿈 여부를 설정합니다.

**Syntax**
```javascript
Layout.flexwrap
```

**Setting Syntax**
```javascript
자동으로 줄바꿈 처리합니다.
```

**Remark**
- 넥사크로 스튜디오에서만 값을 설정할 수 있고, 실행 중에는 수정할 수 없는 속성입니다.

- flexwrap 속성값을 설정하지 않으면 "nowrap"으로 설정됩니다.

- flexwrap 속성값을 "wrap"으로 설정한 경우 컴포넌트의 flexshrink 속성은 무시됩니다.

---

## height

Form 에 정의된 현재 Layout 의 높이를 설정하는 속성입니다.

**Syntax**
```javascript
Layout.height
```

**Setting Syntax**
```javascript
현재 Layout 의 높이를 pixel 단위의 숫자로 설정합니다.
0~12000 사이의 숫자만 설정할 수 있습니다.
```

**Remark**
- 넥사크로 스튜디오에서만 값을 설정할 수 있고, 실행중에는 수정할 수 없는 속성입니다.

---

## horizontalgap

Layout 컨테이너 내 배치된 컴포넌트(또는 Cell)의 수평축 간격을 설정하는 속성입니다.

**Syntax**
```javascript
Layout.horizontalgap
```

**Setting Syntax**
```javascript
type 속성값에 따라 간격을 설정합니다.

- "horizontal", "vertical": 컴포넌트의 수평축 간격
- "table": Layout 컨테이너 내 가상의 Table Cell의 수평축 간격
```

**Remark**
- 넥사크로 스튜디오에서만 값을 설정할 수 있고, 실행 중에는 수정할 수 없는 속성입니다.

- horizontalgap 속성값을 설정하지 않으면 undefined로 설정되고, 0px 값으로 동작합니다.

- 음수값으로 허용하지 않으며 유효하지 않은 값은 0px 값으로 동작합니다.

- 개별 컴포넌트(또는 Cell) 간의 간격은 설정할 수 없습니다.

---

## initvalueid

Layout 에 적용될 InitValue 의 ID 를 설정하는 속성입니다.

**Syntax**
```javascript
Layout.set_initvalueid(strValueID) // set
Layout.initvalueid // get
```

**Setting Syntax**
```javascript
InitValueDefinition 영역에 정의된 InitValue 파일에서 Layout 에 적용할 항목의 ID 를 문자열로 설정합니다.
```

**Remark**
- Layout 가 화면에 표시된 후에는 속성값을 설정하거나 변경 할 수 없습니다.
   Layout 를 동적으로 생성 시 show() 메소드 실행 전에 속성값을 설정하여야 합니다.

- Screen 별로 Environment 의 initvaluefileid 속성을 각각 설정하면 Screen 에 따라 다른 초기값을 설정할 수 있습니다.

- InitValueDefinition 영역에 한 개 이상의 InitValue 파일을 정의할 수 있고,
   InitValue 파일에는 컴포넌트별로 여러개의 초기값 정의를 할 수 있습니다.

---

## mobileorientation

모바일 환경에서 LayOut 이 표시될 디바이스의 방향값을 설정하는 속성입니다.

**Syntax**
```javascript
Layout.mobileorientation
```

**Setting Syntax**
```javascript
디바이스의 방향이 "Landscape" 일 때 현재 LayOut 이 표시됩니다.
```

**Remark**
- 넥사크로 스튜디오에서만 값을 설정할 수 있고, 실행중에는 수정할 수 없는 속성입니다.

- 모바일 환경일 때만 지원되는 속성이며, "Desktop" 환경에서는 속성값에 관계없이 LayOut 이 표시됩니다.

- 모바일 환경에서 디바이스 방향과 일치하는 설정이 없을 경우 "default" LayOut 이 표시됩니다.

---

## name

Layout 의 이름을 설정하는 속성입니다.

**Syntax**
```javascript
Layout.name
```

**Setting Syntax**
```javascript
Layout 을 구별할 수 있는 유일값을 설정합니다.
```

**Remark**
- 넥사크로 스튜디오에서만 값을 설정할 수 있고, 실행중에는 수정할 수 없는 속성입니다.

- Form 에는 "default" 로 이름이 설정된 Layout 이 반드시 존재하여야 합니다.

---

## screenid

Layout 이 적용될 Screen 의 ID 를 설정하는 속성입니다.

**Syntax**
```javascript
Layout.screenid
```

**Setting Syntax**
```javascript
ScreenDefinition 영역에 정의된 Screen 의 ID 를 콤마(",")로 구분하여 여러개 설정할 수 있습니다.

값을 설정하지 않으면 모든 Screen 에 Layout 이 적용됩니다.
```

**Remark**
- 넥사크로 스튜디오에서만 값을 설정할 수 있고, 실행중에는 수정할 수 없는 속성입니다.

- ScreenDefinition 영역에 정의되지 않은 Screen 의 ID 설정 시 무시됩니다.

- 선택된 Screen 에 해당하는 Layout 이 존재하지 않을 경우 screenid 속성값에 관계없이 Default Layout 이 표시될 수 있습니다.

---

## spacing

Layout 컨테이너와 컴포넌트 간 여백을 설정하는 속성입니다.

**Syntax**
```javascript
Layout.spacing
```

**Setting Syntax**
```javascript
여백의 너비를 pixel 단위 숫자로 설정합니다.
```

**Remark**
- 넥사크로 스튜디오에서만 값을 설정할 수 있고, 실행 중에는 수정할 수 없는 속성입니다.

- spacing 속성값을 설정하지 않으면 undefined로 설정되고, "0px" 값으로 동작합니다.

- 음수값으로 허용하지 않으며 유효하지 않은 값은 "0px" 값으로 동작합니다.

- Layout에 배치되는 컴포넌트의 개수가 특정 범위를 넘어서면 아래의 조건 중 하나를 만족할 때 spacing 속성값과 실제 여백 너비가 달라질 수 있습니다.
    - flexmainaxisalign 속성값을 "center", "spacearound", "spaceevenly" 중 하나로 설정
    - flexcrossaxisalign, flexcrossaxiswrapalign 속성값을 "center", "spacearound", "spaceevenly" 중 하나로 설정

---

## stepcount

Layout 의 화면이 분할되는 갯수를 설정하는 속성입니다.

**Syntax**
```javascript
Layout.stepcount
```

**Setting Syntax**
```javascript
Layout 의 화면이 분할되는 갯수를 숫자로 설정합니다.
```

**Remark**
- 넥사크로 스튜디오에서만 값을 설정할 수 있고, 실행중에는 수정할 수 없는 속성입니다.

- stepcount 속성값 만큼 현재 Layout 을 분할하여 사용할 수 있습니다.
  Layout 의 크기는 변경되지 않고, 동일 화면에서 Layout 의 갯수만 증가됩니다.

- Layout 화면이 분할되면 실행 시 StepControl 이 표시되며 가로 방향으로 이동할 수 있습니다.

- 컴포넌트의 positionstep 속성을 사용하여 특정 분할화면에만 컴포넌트를 표시하거나 전체 분할화면에 컴포넌트를 표시할 수 있습니다.

- 설정된 stepcount 속성값은 화면이 표시될 때 StepControl 의 stepcount 속성값에 반영됩니다.

---

## stepindex

Layout 에 분할된 화면 중 표시할 화면의 인덱스를 설정하는 속성입니다.

**Syntax**
```javascript
Layout.stepindex
```

**Setting Syntax**
```javascript
표시할 화면의 인덱스를 숫자로 설정합니다.

인덱스는 "0" 부터 시작하며 "stepcount속성값 - 1"까지 설정할 수 있습니다.
```

**Remark**
- 넥사크로 스튜디오에서만 값을 설정할 수 있고, 실행중에는 수정할 수 없는 속성입니다.

- Form 로딩 시 stepindex 속성에 설정된 인덱스에 해당하는 분할화면이 표시됩니다.

- 컴포넌트의 positionstep 속성을 사용하여 특정 분할화면에만 컴포넌트를 표시하거나 전체 분할화면에 컴포넌트를 표시할 수 있습니다.

- 설정된 stepindex 속성값은 화면이 표시될 때 StepControl 의 stepindex 속성값에 반영됩니다.

---

## tablecellalign

Layout 컨테이너 내 가상의 Table Cell의 배치 방식을 설정합니다.

**Syntax**
```javascript
Layout.tablecellalign
```

**Setting Syntax**
```javascript
배치 기준을 설정합니다.
- "start": Layout 컨테이너 내 수평축 또는 수직축 시작 위치에 맞추어 배치됩니다.
- "end": Layout 컨테이너 내 수평축 또는 수직축 끝 위치에 맞추어 배치됩니다.
- "center": Layout 컨테이너 내 수평축 또는 수직축 가운데 위치에 맞추어 배치됩니다.
- "spacebetween": Layout 컨테이너 내 수평축 또는 수직축 시작 위치와 끝 위치에 Cell을 배치하고 나머지 Cell은 Cell 간 간격이 같도록 배치합니다.
- "spacearound": Layout 컨테이너 내 수평축 또는 수직축을 기준으로 Cell의 위, 아래 또는 왼쪽, 오른쪽에 같은 크기의 여백을 가지도록 Cell을 배치합니다. 
   시작 위치와 첫 번째 Cell 사이의 간격, 마지막 Cell과 끝 위치 사이의 간격은 각 Cell 사이의 간격의 1/2 크기로 배치합니다.
- "spaceevenly": Layout 컨테이너 내 수평축 또는 수직축을 기준으로 시작 위치와 첫 번째 Cell 사이의 간격, 각 Cell 사이의 간격, 마지막 Cell과 끝 위치 사이의 간격이 같도록 Cell을 배치합니다.
```

**Remark**
- 넥사크로 스튜디오에서만 값을 설정할 수 있고, 실행 중에는 수정할 수 없는 속성입니다.

---

## tablecellincompalign

Layout 컨테이너 내 가상의 Table Cell 영역 내에서 컴포넌트의 배치 방식을 설정합니다.

**Syntax**
```javascript
Layout.tablecellincompalign
```

**Setting Syntax**
```javascript
배치 기준을 설정합니다.
- "start": Cell 영역 내 수평축 또는 수직축 시작 위치에 맞추어 배치됩니다.
- "center": Cell 영역 내 수평축 또는 수직축 가운데 위치에 맞추어 배치됩니다.
- "end": Cell 영역 내 수평축 또는 수직축 끝 위치에 맞추어 배치됩니다.
```

**Remark**
- 넥사크로 스튜디오에서만 값을 설정할 수 있고, 실행 중에는 수정할 수 없는 속성입니다.

- 하나의 Cell 영역 내 2개 이상의 컴포넌트가 배치된 경우 겹쳐진 상태로 배치됩니다.

- tabletemplatearea 속성에서 2개 이상의 Cell을 같은 이름으로 설정하고 해당 영역에 컴포넌트를 배치한 경우 같은 이름으로 묶은 Cell 영역 기준으로 배치됩니다.

---

## tabledirection

Layout 컨테이너 내 가상의 Table Cell에 컴포넌트가 자동으로 배치되는 방향을 설정하는 속성입니다.

**Syntax**
```javascript
Layout.tabledirection
```

**Setting Syntax**
```javascript
컴포넌트를 배치할 Cell을 수직 방향으로 탐색합니다.
```

**Remark**
- 넥사크로 스튜디오에서만 값을 설정할 수 있고, 실행 중에는 수정할 수 없는 속성입니다.

- tabledirection 속성값을 설정하지 않으면 "horizontal"으로 설정됩니다.

- 컴포넌트가 배치된 Cell은 탐색 대상에서 제외합니다.

---

## tabletemplate

Layout 컨테이너 내 가상의 Table Cell을 설정합니다.

**Syntax**
```javascript
Layout.tabletemplate
```

**Setting Syntax**
```javascript
Cell이 차지할 크기를 설정합니다.

- px: 설정된 크기
- %: 컨테이너 크기 기준으로 설정된 비율만큼의 크기
- *: 0보다 큰 실수로 설정하며 컨테이너 크기에서 고정된 크기("px" 또는 "%"로 설정한 값, spacing, verticalgap, horizontalgap 속성값에서 설정한 값)을 제외한 크기를 기준으로 비율을 계산한 크기
```

**Remark**
- 넥사크로 스튜디오에서만 값을 설정할 수 있고, 실행 중에는 수정할 수 없는 속성입니다.
  속성값을 직접 수정할 수는 없지만 Form 오브젝트의 setFluidLayoutProperty 메소드를 사용해 속성값을 수정할 수 있습니다.
  (setFluidLayoutProperty 메소드 사용 시 일부 제약이 있습니다).

- tabletemplate 속성값을 설정하지 않으면 "1* / 1*"로 설정됩니다.

- Cell은 서로 겹치지 않습니다. Cell에 배치된 컴포넌트의 크기가 Cell보다 큰 경우 Cell 영역을 벗어날 수 있습니다.

---

## tabletemplatearea

Layout 컨테이너 내 가상의 Table Cell의 이름을 설정하는 속성입니다.

**Syntax**
```javascript
Layout.tabletemplatearea
```

**Setting Syntax**
```javascript
Cell 이름을 설정합니다.
```

**Remark**
- 넥사크로 스튜디오에서만 값을 설정할 수 있고, 실행 중에는 수정할 수 없는 속성입니다.

- tabletemplate 속성에서 설정한 Row, Column 개수만큼 설정합니다. 개수가 맞지 않은 경우 유효하지 않은 값으로 처리합니다.

- Cell 이름을 지정하지 않은 경우에는 "."로 미사용 Cell 영역을 표시합니다.

- 여러 개의 Cell을 하나의 이름으로 설정해 묶을 수 있습니다. 
  - 이때 묶여지는 Cell은 연속적이어야 하고 사각형 형태로 묶여야 합니다.
    예를 들어 3*2 형태로 tabletemplate 속성을 설정한 경우 Column 별로 이름을 설정한다면 아래와 같이 설정할 수 있습니다.
      "LEFT BODY RIGHT" "LEFT BODY RIGHT"
  - 여러 개의 Cell을 하나의 이름으로 설정한 후 같은 이름으로 다른 쪽에 있는 여러 개의 Cell을 설정할 수는 없습니다.
    아래와 같은 경우 첫 번째 Column과 세 번째 컬럼의 이름("SIDE")이 같아서 둘 다 유효하지 않은 값으로 처리합니다.
      "SIDE BODY SIDE" "SIDE BODY SIDE"

---

## type

Layout 컨테이너 내 컴포넌트 배치 기준을 설정하는 속성입니다.

**Syntax**
```javascript
Layout.type
```

**Setting Syntax**
```javascript
컴포넌트를 Layout 컨테이너 내 가상의 Table Cell에 배치합니다.
```

**Remark**
- 넥사크로 스튜디오에서만 값을 설정할 수 있고, 실행 중에는 수정할 수 없는 속성입니다.

- type 속성값을 설정하지 않으면 "default"로 설정됩니다.

- PopupMenu, PopupDiv 컴포넌트는 type 속성과 상관없이 동작합니다.
  예를 들어 type 속성값을 “table”로 설정한 경우 배치된 컴포넌트의 크기를 %로 설정한 경우 Layout 컨테이너 내 가상의 Table Cell 크기를 기준으로 크기가 조정되지만 PopupMenu, PopupDiv 컴포넌트는 부모 Form 오브젝트 기준으로 크기가 조정됩니다.

- 선택한 속성값에 따라 편집할 수 있는 속성이 달라집니다.

- type 속성값을 "horizontal", "vertical", "table"으로 설정 시
    - Layout 내 배치된 컴포넌트의 left, top, right, bottom 속성값(Position Base 포함)은 무시됩니다.
    - stepcount 속성값을 설정해 화면 분할 기능을 사용할 수 없습니다.

---

## verticalgap

Layout 컨테이너 내 배치된 컴포넌트(또는 Cell)의 수직축 간격을 설정하는 속성입니다.

**Syntax**
```javascript
Layout.verticalgap
```

**Setting Syntax**
```javascript
type 속성값에 따라 간격을 설정합니다.

- "horizontal", "vertical": 컴포넌트의 수직축 간격
- "table": Layout 컨테이너 내 가상의 Table Cell의 수직축 간격
```

**Remark**
- 넥사크로 스튜디오에서만 값을 설정할 수 있고, 실행 중에는 수정할 수 없는 속성입니다.

- verticalgap 속성값을 설정하지 않으면 undefined로 설정되고, 0px 값으로 동작합니다.

- 음수값으로 허용하지 않으며 유효하지 않은 값은 0px 값으로 동작합니다.

- 개별 컴포넌트(또는 Cell) 간의 간격은 설정할 수 없습니다.

---

## width

Form 에 정의된 현재 Layout 의 너비를 설정하는 속성입니다.

**Syntax**
```javascript
Layout.width
```

**Setting Syntax**
```javascript
현재 Layout 의 너비를 pixel 단위의 숫자로 설정합니다.
0~12000 사이의 숫자만 설정할 수 있습니다.
```

**Remark**
- 넥사크로 스튜디오에서만 값을 설정할 수 있고, 실행중에는 수정할 수 없는 속성입니다.

---
