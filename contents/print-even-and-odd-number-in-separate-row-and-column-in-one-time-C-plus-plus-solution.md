---
coverImageWidth: "1200"
coverImageHeight: "700"
datetime: 2022-06-09T03:42:51Z
tags:
  - Problem Solving
  - Sololearn
  - Programming
  - C++
  - Blog
author: Noman Dhoni
type: article
coverImage: https://1.bp.blogspot.com/-L7kpuCIG0jc/YRxhWfBR00I/AAAAAAAABmE/Fb--5THd2e4ulsdxjVUHOGa4PoLsz7wfwCLcBGAsYHQ/s1280/5.webp
coverImageAlt: Screenshot of Terminal Portfolio Website
title: Print Even and Odd Number in separate row/colum in one time - [C++ Solution]
description:
  A fast and efficient C++ solution to print even and odd numbers in separate rows/columns, perfect for quick list generation.
excerpt:
  Explore a powerful C++ program that swiftly generates a list of even and odd numbers, perfect for writers seeking a rapid solution for their tasks.
slug: print-even-and-odd-number-in-separate-row-and-column-in-one-time-C-plus-plus-solution
featured: true
category: Problem Solving
---
## Problem: Printing Even and Odd Numbers

Suppose you are a book writer and you need to quickly print even and odd numbers from 1 to a given value 'n' in separate rows or columns. Let's solve this problem using a simple C++ program.
![Image of Print Even and Odd Number in separate row/colum in one time - [C++ Solution]](https://1.bp.blogspot.com/-L7kpuCIG0jc/YRxhWfBR00I/AAAAAAAABmE/Fb--5THd2e4ulsdxjVUHOGa4PoLsz7wfwCLcBGAsYHQ/s1280/5.webp "Print Even and Odd Number in separate row/colum in one time - [C++ Solution]")

## Problem Solution

```cpp
#include <iostream>
using namespace std;

int main()
{
    int num, a;
    num = 1;
    cout << "Enter how far you want to go: ";
    cin >> a;
    cout << "Odd numbers         " << "Even Numbers" << endl;
    while (num <= a) {
        if (num % 2 == 0) {
            cout << "                    " << num << " is Even" << endl;
        } else {
            cout << endl << num << " is Odd" << endl;
        }
        num = num + 1;
    }
    return 0;
}
```
