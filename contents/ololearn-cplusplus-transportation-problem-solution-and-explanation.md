---
coverImageWidth: "1200"
coverImageHeight: "700"
datetime: 2021-09-29T16:55:12.000+00:00
tags:
  - Problem Solving
  - Sololearn
  - Programming
  - C++
  - Blog
author: Noman Dhoni
type: article
coverImage: https://1.bp.blogspot.com/-8jNM-PLWZ0s/YRxJs4n604I/AAAAAAAABls/UJ_hLVYp6p47mj9TFzNtTAdwJr_v3lFBQCLcBGAsYHQ/s1280/2.webp
coverImageAlt: Sololearn C++ 'Transportation' problem solution and explanation text
title: Sololearn C++ 'Transportation' problem solution and explanation.
description:
  Problem Solving Sololearn C++ problem and solving solution and explanation
excerpt:
  My journey about problem solving solution and in Sololearn C++ problem and solving solution. My Approach to solve solution and explanation.
slug: sololearn-cplusplus-transportation-problem-solution-and-explanation
featured: true
category: Problem Solving
language: English
---

## Problem Explanation:
The first bus will transport 50 passengers, leaving 126 - 50 = 76 in the station.

The next one will leave 76 - 50 = 26 in the station. Thus, the last bus will take all of the 26 passengers, having 50 - 26 = 24 seats left empty.

## Problem Hint:
The modulo operator (%) can help to determine the number of passengers for the last bus.

![Image of the Thumbnail](https://1.bp.blogspot.com/-8jNM-PLWZ0s/YRxJs4n604I/AAAAAAAABls/UJ_hLVYp6p47mj9TFzNtTAdwJr_v3lFBQCLcBGAsYHQ/s1280/2.webp "Image of the Thumbnail")

## Problem Solution

```cpp
#include <iostream>
using namespace std;

int main()
{
    int passenger, seats, filledseats, emptyseats;
    seats = 50;
    cout << "Enter passengers amount" << endl;
    cin >> passenger;
    filledseats = passenger % seats;
    emptyseats = seats - filledseats;
    cout << "Last bus filled seats" << endl << filledseats << endl;
    cout << "Last bus empty seats" << endl << emptyseats << endl;
    return 0;
}
```

