#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>
#include <string.h>
#include <stdlib.h> 
int main(void){
	char line[1024] = {'\0'};
	char ip[16]= {'\0'};
	FILE *pFile = NULL;
	int count = 0;
	printf('�����벶����ļ���: \n');
	scanf('%s',line);
	printf('��������ļ�����: %s,  ��ʼ��ѯ���� IP ...\n');
	pFile = fopen(line,'r');
	if(pFile == NULL){printf('���ļ�ʧ��');
	return 0; 
	}
	while(!feof(pFile)){
		fgets(line,1024,pFile);
		if(strstr(line,'Len=72') && strstr(line,'UDP  114'))
		if(count < 3)
		{int no = 0;
		char time[16] = {'\0'};
		char myIP[32] = {'\0'};
		}
	}
	
}
