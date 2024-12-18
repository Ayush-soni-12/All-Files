#include <iostream>
using namespace std;
 
 int main(){
    // char array banate bakt hume end me null character (\0) lagna padtha hai
    char arr[5]={'c','o','d','e','\0'};
    cout << arr<< endl;
    cout << arr[1] <<endl;
//   input lete bakt agr hum space dete hai to ye space ke bad bali value ko consider nhi krta hai  
//  is problem  ko hatane ke liye cin.getline() ka use krte hai 
    // char word[30];
    // cin >> word;
    //  cout << "your word is " << word << endl;
      char sentence[30];
      cin.getline(sentence , 30);
      cout << "your sentence is " <<sentence << endl;
        


     return 0;
   
 }