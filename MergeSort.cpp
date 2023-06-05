#include <bits/stdc++.h>
using namespace std;
void fn(int arr[],int l, int h);
void merge(int arr[],int l,int m,int h);
int main()
    {
        
          int arr[5] = {1, 2, 5, 4, 3};
          int l=0,n=5;
          fn(arr,l,n-1);
          for(int i=0;i<n;i++)
          cout<<arr[i]<<' ';
    }
 

void fn(int arr[],int l, int h) {
     if(h>l)
     {
         int m = l+(h-l)/2;
         fn(arr,l,m);
         fn(arr,m+1,h);
         merge(arr,l,m,h);
     }
     return;
}

 void merge(int arr[],int l,int m,int h) {
   vector<int>left,right;
   int i,j,k;
   for(i=l;i<=m;i++)
   left.push_back(arr[i]);
   for(i=m+1;i<=h;i++)
   right.push_back(arr[i]);
   i=0;
   j=0;
   k=l;
   while(i<left.size() && j<right.size())
   {
       if(left[i]>right[j])
       {
           arr[k++]=right[j++];
       }
       else
       arr[k++]=left[i++];
   }
   while(i<left.size())
   arr[k++]=left[i++];

   while(j<right.size())
   arr[k++]=right[j++];

   return ;

}

//  TC -> O(nlogn) SC -> O(n) as I'm using vector in merge function