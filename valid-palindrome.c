#include <stdio.h>
#include <stdbool.h>
#include <ctype.h>
#include <string.h>

bool is_palindrome(const char *str) {
    int len = strlen(str);

    char cleaned_string[len + 1];
    int cleaned_len = 0;

    for(int i = 0; i < len; i++) {
        if(isalnum((unsigned char)str[i])) {
            cleaned_string[cleaned_len] = tolower((unsigned char)str[i]);
            cleaned_len++;
        }
    }
    // Null-terminate the new string
    cleaned_string[cleaned_len] = '\0';

    int left = 0;
    int right = cleaned_len - 1;

    while(left < right) {
        if(cleaned_string[left] != cleaned_string[right]) {
            return false;
        };
        left = left + 1;
        right = right - 1;
    };
    return true;
};



int main() {
    printf("%s\n", is_palindrome("A man, a plan, a canal: Panama.") ? "true" : "false");
    printf("%s\n", is_palindrome("race a car") ? "true" : "false");
    return 0;
};
