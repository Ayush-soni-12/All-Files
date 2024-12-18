#include <iostream>
using namespace std;

// Function to move disks
void moveDisks(int n, char beg, char aux, char end) {
    if (n == 1) {
        cout << "Move disk from " << beg<< " to " << end << endl;
        return;
    }
    

    moveDisks(n - 1, beg, end, aux);
    
    
    moveDisks(1,beg,aux,end);
    
    
    moveDisks(n - 1, aux, beg, end);
}

int main() {
    int n; // Number of disks
    cout << "Enter the number of disks: ";
    cin >> n;
    
    // Call the function to solve the Tower of Hanoi problem
    moveDisks(n, 'A', 'B', 'C'); // A is the beg, C is the des, B is the auxiliary

    return 0;
}
